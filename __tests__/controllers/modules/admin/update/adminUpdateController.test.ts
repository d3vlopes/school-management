import { expect, it, describe } from 'vitest'

import { errorMock, useCaseErrorMock } from '@/__tests__/mocks'

import { ServerError } from '@/presentation/errors'

import {
  INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/core/validations'

import { ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE } from '@/useCases/modules/admin/update/constants'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AdminUpdateController', () => {
  it('should return status code 400 if email is invalid ', async () => {
    const { sut, adminUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      adminUpdateUseCaseStub,
      INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-email'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(INVALID_EMAIL_ADDRESS_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if email already registered', async () => {
    const { sut, adminUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      adminUpdateUseCaseStub,
      ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['exists-email'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if password is invalid', async () => {
    const { sut, adminUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      adminUpdateUseCaseStub,
      INVALID_PASSWORD_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-password'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(INVALID_PASSWORD_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if name is invalid', async () => {
    const { sut, adminUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      adminUpdateUseCaseStub,
      INVALID_NAME_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-name'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(INVALID_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminUpdateUseCaseStub } = makeSut()

    errorMock(adminUpdateUseCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-name'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockFactory['valid'])

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
