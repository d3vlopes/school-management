import { vitest, it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { generateTeacherID } from '@/useCases/modules/teacher/register/helpers'

import {
  invalidEmailMock,
  invalidNameMock,
  requestMockFactory,
  responseMockFactory,
  validEmailMock,
} from './mocks'

import { makeSut } from './helpers'

const generateTeacherIDMock = () => {
  vitest.mock('@/useCases/modules/teacher/register/helpers', () => ({
    generateTeacherID: vitest.fn((name) => 'generate_teacher_id'),
  }))
}

describe('TeacherRegisterUseCase', () => {
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

  it('should return error if password length less than 6 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidator =
      mockFactory().invalidLengthMock(validatorStub)

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.execute(requestMock)

    const input = requestMock.password
    const min = 6
    const max = 30

    expect(spyOnValidator).toBeCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should return error if name length less than 3 characters', async () => {
    const { sut } = makeSut()

    const spyOnValidator = invalidNameMock()

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.execute(requestMock)

    const input = requestMock.name
    const min = 3
    const max = 30

    expect(spyOnValidator).toBeCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return error if email already register', async () => {
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

  it('should register a new teacher', async () => {
    const { sut, teacherRepositoryStub } = makeSut()

    validEmailMock()

    const spyOnTeacherRepository = vitest.spyOn(
      teacherRepositoryStub,
      'create',
    )

    generateTeacherIDMock()

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.execute(requestMock)

    const teacherID = generateTeacherID(requestMock.name)

    expect(teacherID).toEqual('generate_teacher_id')

    expect(spyOnTeacherRepository).toBeCalledWith({
      name: requestMock.name,
      password: 'password_encrypted',
      email: requestMock.email,
      teacherId: 'generate_teacher_id',
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})

describe('Dependencies', () => {
  it('should call encrypt method of encrypter', async () => {
    const { sut, encrypterStub } = makeSut()

    validEmailMock()

    const encrypterStubSpyOn = vitest.spyOn(encrypterStub, 'encrypt')

    const requestMock = requestMockFactory['valid-password']

    await sut.execute(requestMock)

    expect(encrypterStubSpyOn).toHaveBeenCalledTimes(1)
    expect(encrypterStubSpyOn).toHaveBeenCalledWith(
      requestMock.password,
    )
  })

  it('should throw if encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()

    validEmailMock()

    mockFactory().errorMock(encrypterStub, 'encrypt' as never)

    const promise = sut.execute(
      requestMockFactory['invalid-password'],
    )

    await expect(promise).rejects.toThrow()
  })
})
