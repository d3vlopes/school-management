import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('TeacherLoginController', () => {
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

  it('should return status code 400 if credentials provided is invalid', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Invalid login credentials',
    )

    const requestMock = requestMockFactory['invalid-credentials']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(
      responseMockFactory['invalid-credentials'],
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    mockFactory().errorMock(useCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-credentials'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      'generated_token',
    )

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith({
      email: requestMock.email,
      password: requestMock.password,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
