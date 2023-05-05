import { it, describe, expect, vitest } from 'vitest'

import { MissingParamError, ServerError } from '@/presentation/errors'

import { makeSut } from './helpers/makeSut'

import { requestMockFactory, returnMockFactory } from './mocks'

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

  it('should return status code 400 if UseCase return error', async () => {
    const errorMessage = 'Admin already registered with this email'

    const { sut, adminRegisterUseCaseStub } = makeSut()

    vitest
      .spyOn(adminRegisterUseCaseStub, 'execute')
      .mockResolvedValueOnce({ data: null, error: errorMessage })

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new Error(errorMessage))
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminRegisterUseCaseStub } = makeSut()

    vitest
      .spyOn(adminRegisterUseCaseStub, 'execute')
      .mockRejectedValueOnce(new Error())

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMock)

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(returnMockFactory)
  })
})
