import { expect, it, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { MissingParamError, ServerError } from '@/presentation/errors'

import { INVALID_CREDENTIALS_ERROR_MESSAGE } from '@/useCases/modules/admin/login/constants'

import { makeSut } from './helpers'

import { invalidCredentialsMock, requestMockFactory } from './mocks'

describe('AdminLoginController', () => {
  it('should return status code 400 if email is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-email'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  })

  it('should return status code 400 if password is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-password'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('password'))
  })

  it('should return status code 400 if email provided is invalid', async () => {
    const { sut, adminLoginUseCaseStub } = makeSut()

    invalidCredentialsMock(adminLoginUseCaseStub)

    const response = await sut.handle(
      requestMockFactory['invalid-email'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(INVALID_CREDENTIALS_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if password provided is invalid', async () => {
    const { sut, adminLoginUseCaseStub } = makeSut()

    invalidCredentialsMock(adminLoginUseCaseStub)

    const response = await sut.handle(
      requestMockFactory['invalid-password'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(INVALID_CREDENTIALS_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminLoginUseCaseStub } = makeSut()

    mockFactory().errorMock(adminLoginUseCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-email'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if valid data is provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['valid-credentials'],
    )

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ token: 'generated_token' })
  })
})
