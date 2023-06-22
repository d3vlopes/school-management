import { it, describe, expect } from 'vitest'

import { errorMock } from '@/__tests__/mocks'

import { MissingParamError, ServerError } from '@/presentation/errors'

import {
  ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/useCases/modules/admin/register/constants'

import {
  mockUseCaseError,
  requestMockFactory,
  responseMockFactory,
} from './mocks'

import { makeSut } from './helpers/makeSut'

const requestMock = requestMockFactory

describe('AdminRegisterController', () => {
  it('should return status code 400 if name is not provided', async () => {
    const { sut } = makeSut()

    const { name: _, ...request } = requestMock

    const response = await sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  })

  it('should return status code 400 if email is not provided', async () => {
    const { sut } = makeSut()

    const { email: _, ...request } = requestMockFactory

    const response = await sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  })

  it('should return status code 400 if password is not provided', async () => {
    const { sut } = makeSut()

    const { password: _, ...request } = requestMock

    const response = await sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('password'))
  })

  it('should return status code 400 if email already registered', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    mockUseCaseError(
      adminRegisterUseCaseStub,
      ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
    )

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if email is invalid', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    mockUseCaseError(
      adminRegisterUseCaseStub,
      ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
    )

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if password is invalid', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    mockUseCaseError(
      adminRegisterUseCaseStub,
      ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
    )

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if name is invalid', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    mockUseCaseError(
      adminRegisterUseCaseStub,
      ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
    )

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    errorMock(adminRegisterUseCaseStub, 'execute' as never)

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 201 if UseCase return success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(201)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
