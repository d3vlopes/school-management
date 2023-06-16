import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { studentMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('StudentRegisterController', () => {
  it('should return status code 400 if name is not provided', async () => {
    const { sut } = makeSut()

    const requestMock = requestMockFactory['missing-name']

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual(
      responseMockFactory['missing-name'],
    )
  })

  it('should return status code 400 if email is not provided', async () => {
    const { sut } = makeSut()

    const requestMock = requestMockFactory['missing-email']

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual(
      responseMockFactory['missing-email'],
    )
  })

  it('should return status code 400 if password is not provided', async () => {
    const { sut } = makeSut()

    const requestMock = requestMockFactory['missing-password']

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual(
      responseMockFactory['missing-password'],
    )
  })

  it('should return status code 400 if email already registered', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Email already registered',
    )

    const requestMock = requestMockFactory['email-already-register']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
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

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Invalid email address',
    )

    const requestMock = requestMockFactory['invalid-email']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
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

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Password must be between 6 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
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

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Name must be between 3 and 30 characters',
    )

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
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

    const requestMock = requestMockFactory['invalid-password']

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 201 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      studentMock,
    )

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
