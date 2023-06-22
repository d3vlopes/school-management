import { it, describe, expect, vitest } from 'vitest'

import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

import {
  requestMockFactory,
  returnErrorMockFactory,
  returnSuccessMockFactory,
} from './mocks'

import { makeSut } from './helpers/makeSut'

const requestValidMock = requestMockFactory['valid']

describe('AdminLoginUseCase', () => {
  it('should call method findOne of AdminRepository with correct values', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = vitest.spyOn(
      adminRepositoryStub,
      'findOne',
    )

    await sut.execute(requestValidMock)

    expect(spyOnAdminRepositoryStub).toHaveBeenCalledWith({
      email: requestValidMock.email,
    })
  })

  it('should return error message if email is invalid', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    vitest
      .spyOn(adminRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute(
      requestMockFactory['invalid-email'],
    )

    expect(response).toStrictEqual(
      returnErrorMockFactory['invalid-credentials'],
    )
  })

  it('should call method compare of Encrypter with correct values', async () => {
    const { sut, encrypterStub } = makeSut()

    const spyOnEncrypterStub = vitest.spyOn(encrypterStub, 'compare')

    await sut.execute(requestValidMock)

    expect(spyOnEncrypterStub).toHaveBeenCalledWith(
      requestValidMock.password,
      adminMock.password,
    )
  })

  it('should return errror message if password is invalid', async () => {
    const { sut, encrypterStub } = makeSut()

    vitest
      .spyOn(encrypterStub, 'compare')
      .mockResolvedValueOnce(false)

    const response = await sut.execute(
      requestMockFactory['invalid-password'],
    )

    expect(response).toStrictEqual(
      returnErrorMockFactory['invalid-credentials'],
    )
  })

  it('should call method generateToken of Token with correct values', async () => {
    const { sut, tokenStub } = makeSut()

    const spyOnTokenStub = vitest.spyOn(tokenStub, 'generateToken')

    await sut.execute(requestValidMock)

    expect(spyOnTokenStub).toBeCalledWith({
      id: adminMock.id,
      role: adminMock.role,
    })
  })

  it('should return token if correct values is provided', async () => {
    const { sut } = makeSut()

    const response = await sut.execute(requestValidMock)

    expect(response).toStrictEqual(returnSuccessMockFactory)
  })
})
