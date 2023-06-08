import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { teacherMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('TeacherRegisterController', () => {
  it('should return status code 400 if name is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-name'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['missing-name'],
    )
  })

  it('should return status code 400 if email is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-email'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['missing-email'],
    )
  })

  it('should return status code 400 if password is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-password'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['missing-password'],
    )
  })

  it('should return status code 400 if email already registered', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCaseStub = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Email already registered',
    )

    const requestMock = requestMockFactory['email-already-register']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCaseStub).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(
      responseMockFactory['email-already-register'],
    )
  })

  it('should return status code 400 if email is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCaseStub = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Invalid email address',
    )

    const requestMock = requestMockFactory['invalid-email']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCaseStub).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-email'],
    )
  })

  it('should return status code 400 if password is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCaseStub = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Password must be between 6 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCaseStub).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should return status code 400 if name is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCaseStub = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Name must be between 3 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCaseStub).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    mockFactory().errorMock(useCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['valid-data'],
    )

    expect(response).toEqual(responseMockFactory['server-error'])
  })

  it('should return status code 201 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCaseStub = mockFactory().useCaseSuccessMock(
      useCaseStub,
      teacherMock,
    )

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCaseStub).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
