import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { teacherMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('TeacherUpdateController', () => {
  it('should return status code 400 if data is not provided', async () => {
    const { sut } = makeSut()

    const requestMock = {
      user: {
        id: 'teacher_id',
      },
    }

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual({
      statusCode: 400,
      body: new Error('Missing body values'),
    })
  })

  it('should return status code 400 if email is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Invalid email address',
    )

    const requestMock = requestMockFactory['invalid-email']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMock.user.id,
      email: requestMock.email,
      name: undefined,
      password: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-email'],
    )
  })

  it('should return status code 400 if email already registered', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Email already registered',
    )

    const requestMock = requestMockFactory['email-already-registered']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMock.user.id,
      email: requestMock.email,
      name: undefined,
      password: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['email-already-registered'],
    )
  })

  it('should return status code 400 if password is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Password must be between 6 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMock.user.id,
      password: requestMock.password,
      email: undefined,
      name: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should return status code 400 if name is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Name must be between 3 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMock.user.id,
      name: requestMock.name,
      email: undefined,
      password: undefined,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    mockFactory().errorMock(useCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-teacher-id'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const updateTeacherData = {
      ...teacherMock,
      name: 'update_name',
      email: 'update_email@provider.com',
      password: 'encrypter_new_password',
    }

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      updateTeacherData,
    )

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMock.user.id,
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
