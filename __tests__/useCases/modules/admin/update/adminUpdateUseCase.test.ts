import { vitest, expect, it, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import {
  requestMockFactory,
  responseMockFactory,
  updateAdminMock,
  validEmailMock,
  invalidEmailMock,
} from './mocks'

import { makeSut } from './helpers'

describe('AdminUpdateUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub = invalidEmailMock(validatorStub)

    const response = await sut.execute(
      requestMockFactory['invalid-email'],
    )

    expect(spyOnValidatorStub).toHaveBeenCalledWith(
      requestMockFactory['invalid-email'].email,
    )

    expect(response).toStrictEqual(
      responseMockFactory['invalid-email'],
    )
  })

  it('should return error if password less length 6 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub =
      mockFactory().invalidLengthMock(validatorStub)

    const response = await sut.execute(
      requestMockFactory['invalid-password'],
    )

    const input = requestMockFactory['invalid-password'].password
    const min = 6
    const max = 30

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)
    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should return error if name less length 3 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub =
      mockFactory().invalidLengthMock(validatorStub)

    const response = await sut.execute(
      requestMockFactory['invalid-name'],
    )

    const input = requestMockFactory['invalid-name'].name
    const min = 3
    const max = 30

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)
    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should update admin password', async () => {
    const { sut, adminRepositoryStub, encrypterStub } = makeSut()

    const spyOnAdminRepositoryStub = updateAdminMock(
      adminRepositoryStub,
      { password: 'password_encrypted' },
    )

    const spyOnEncrypterStub = vitest.spyOn(encrypterStub, 'encrypt')

    validEmailMock(adminRepositoryStub)

    const response = await sut.execute(
      requestMockFactory['update-password'],
    )

    expect(spyOnEncrypterStub).toHaveBeenCalled()
    expect(spyOnAdminRepositoryStub).toHaveBeenCalled()

    expect(response).toStrictEqual(
      responseMockFactory['update-password'],
    )
  })

  it('should update admin name', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = updateAdminMock(
      adminRepositoryStub,
      { name: 'Updated Admin Name' },
    )

    validEmailMock(adminRepositoryStub)

    const response = await sut.execute(
      requestMockFactory['update-name'],
    )

    expect(spyOnAdminRepositoryStub).toHaveBeenCalled()

    expect(response).toStrictEqual(responseMockFactory['update-name'])
  })

  it('should update admin email', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = updateAdminMock(
      adminRepositoryStub,
      { email: 'update_email@provider.com' },
    )

    validEmailMock(adminRepositoryStub)

    const response = await sut.execute(
      requestMockFactory['update-email'],
    )

    expect(spyOnAdminRepositoryStub).toHaveBeenCalled()

    expect(response).toStrictEqual(
      responseMockFactory['update-email'],
    )
  })

  it('should return error if email is not exists', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = vitest.spyOn(
      adminRepositoryStub,
      'findOne',
    )

    const response = await sut.execute(
      requestMockFactory['exists-email'],
    )

    expect(spyOnAdminRepositoryStub).toHaveBeenCalled()

    expect(response).toStrictEqual(
      responseMockFactory['exists-email'],
    )
  })

  it('should call encrypt method of encrypter', async () => {
    const { sut, encrypterStub, adminRepositoryStub } = makeSut()

    updateAdminMock(adminRepositoryStub, {
      password: 'password_encrypted',
    })

    const spyOnEncrypterStub = vitest.spyOn(encrypterStub, 'encrypt')

    validEmailMock(adminRepositoryStub)

    await sut.execute(requestMockFactory['update-password'])

    expect(spyOnEncrypterStub).toHaveBeenCalledTimes(1)
    expect(spyOnEncrypterStub).toHaveBeenCalledWith(
      requestMockFactory['update-password'].password,
    )
  })

  it('should throw if encrypter throws', async () => {
    const { sut, encrypterStub, adminRepositoryStub } = makeSut()

    updateAdminMock(adminRepositoryStub, {
      password: 'password_encrypted',
    })

    validEmailMock(adminRepositoryStub)

    mockFactory().errorMock(encrypterStub, 'encrypt' as never)

    const promise = sut.execute(requestMockFactory['update-password'])

    await expect(promise).rejects.toThrow()
  })
})
