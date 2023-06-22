import { vitest, it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import {
  encrypterMock,
  invalidEmailMock,
  requestMockFactory,
  responseMockFactory,
  updateTeacherMock,
  validEmailMock,
} from './mocks'

import { makeSut } from './helpers'

describe('TeacherUpdateUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut } = makeSut()

    const spyOnValidator = invalidEmailMock()

    const requestMock = requestMockFactory['invalid-email']

    const response = await sut.execute(requestMock)

    expect(spyOnValidator).toBeCalledWith(requestMock.email)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-email'],
    )
  })

  it('should return error if email is already register', async () => {
    const { sut, teacherRepositoryStub } = makeSut()

    const spyOnTeacherRepository = vitest.spyOn(
      teacherRepositoryStub,
      'findOne',
    )

    const requestMock = requestMockFactory['email-already-register']

    const response = await sut.execute(requestMock)

    expect(spyOnTeacherRepository).toBeCalledWith({
      email: requestMock.email,
    })

    expect(response).toStrictEqual(
      responseMockFactory['email-already-register'],
    )
  })

  it('should return error if name length less than 3 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnNameValidator =
      mockFactory().invalidLengthMock(validatorStub)

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.execute(requestMock)

    const input = requestMock.name
    const min = 3
    const max = 30

    expect(spyOnNameValidator).toBeCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return error if password length less than 6 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnNameValidator =
      mockFactory().invalidLengthMock(validatorStub)

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.execute(requestMock)

    const input = requestMock.password
    const min = 6
    const max = 30

    expect(spyOnNameValidator).toBeCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should update teacher password', async () => {
    const { sut } = makeSut()

    const newEncryptedPassword = 'update_encrypted_password'

    const spyOnTeacherRepository = updateTeacherMock({
      password: newEncryptedPassword,
    })

    const spyOnEncrypterStub = encrypterMock(newEncryptedPassword)

    const requestMock = requestMockFactory['valid-password']

    const response = await sut.execute(requestMock)

    expect(spyOnEncrypterStub).toHaveBeenCalled()
    expect(spyOnTeacherRepository).toBeCalledWith(requestMock.id, {
      password: newEncryptedPassword,
      email: undefined,
      name: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['update-password'],
    )
  })

  it('should update teacher name', async () => {
    const { sut } = makeSut()

    const spyOnTeacherRepository = updateTeacherMock({
      name: 'update_name',
    })

    const requestMock = requestMockFactory['valid-name']

    const response = await sut.execute(requestMock)

    expect(spyOnTeacherRepository).toBeCalledWith(requestMock.id, {
      name: requestMock.name,
      email: undefined,
      password: undefined,
    })

    expect(response).toStrictEqual(responseMockFactory['update-name'])
  })

  it('should update teacher email', async () => {
    const { sut } = makeSut()

    const spyOnTeacherRepository = updateTeacherMock({
      email: 'update_email@provider.com',
    })

    validEmailMock()

    const requestMock = requestMockFactory['valid-email']

    const response = await sut.execute(requestMock)

    expect(spyOnTeacherRepository).toBeCalledWith(requestMock.id, {
      email: requestMock.email,
      name: undefined,
      password: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['update-email'],
    )
  })

  describe('Dependencies', () => {
    it('should call encrypt method of encrypter', async () => {
      const { sut } = makeSut()

      const requestMock = requestMockFactory['valid-password']

      const spyOnEncrypterStub = encrypterMock()

      await sut.execute(requestMock)

      expect(spyOnEncrypterStub).toHaveBeenCalledTimes(1)
      expect(spyOnEncrypterStub).toHaveBeenCalledWith(
        requestMock.password,
      )
    })

    it('should throw if encrypter throws', async () => {
      const { sut, encrypterStub } = makeSut()

      mockFactory().errorMock(encrypterStub, 'encrypt' as never)

      const promise = sut.execute(
        requestMockFactory['invalid-password'],
      )

      await expect(promise).rejects.toThrow()
    })

    it('should throw if TeacherRepository throws', async () => {
      const { sut, teacherRepositoryStub } = makeSut()

      mockFactory().errorMock(
        teacherRepositoryStub,
        'update' as never,
      )

      const promise = sut.execute(
        requestMockFactory['invalid-teacher-id'],
      )

      await expect(promise).rejects.toThrow()
    })
  })
})
