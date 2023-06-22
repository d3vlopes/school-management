import { describe, expect, it, vitest } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { requestMockFactory, returnMockFactory } from './mocks'

import { makeSut } from './helpers'

const request = requestMockFactory['valid']

describe('AdminRegisterUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub = vitest
      .spyOn(validatorStub, 'isEmail')
      .mockReturnValueOnce(false)

    const response = await sut.execute(
      requestMockFactory['invalid-email'],
    )

    expect(spyOnValidatorStub).toHaveBeenCalledWith('invalid_email')
    expect(response).toStrictEqual(returnMockFactory['invalid-email'])
  })

  it('should return error if password less length 6 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub = vitest
      .spyOn(validatorStub, 'isLength')
      .mockReturnValueOnce(false)

    const response = await sut.execute(
      requestMockFactory['invalid-password'],
    )

    const input = '12345'
    const min = 6
    const max = 30

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)
    expect(response).toStrictEqual(
      returnMockFactory['invalid-password'],
    )
  })

  it('should return error if name less length 3 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub = vitest
      .spyOn(validatorStub, 'isLength')
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)

    const response = await sut.execute(
      requestMockFactory['invalid-name'],
    )

    const input = 'Jo'
    const min = 3
    const max = 30

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)
    expect(response).toStrictEqual(returnMockFactory['invalid-name'])
  })

  it('should not register if email is exists', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const adminRepositorySpyOn = vitest.spyOn(
      adminRepositoryStub,
      'create',
    )

    vitest
      .spyOn(adminRepositoryStub, 'findByEmail')
      .mockResolvedValueOnce(true)

    const response = await sut.execute(
      requestMockFactory['exists-email'],
    )

    expect(adminRepositorySpyOn).toHaveBeenCalledTimes(0)

    expect(response).toStrictEqual(returnMockFactory['exists-email'])
  })

  it('should register a new admin user', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const adminRepositorySpyOn = vitest.spyOn(
      adminRepositoryStub,
      'create',
    )

    const response = await sut.execute(request)

    expect(adminRepositorySpyOn).toHaveBeenCalledTimes(1)

    expect(response).toStrictEqual(returnMockFactory['success'])
  })

  it('should call encrypt method of encrypter', async () => {
    const { sut, encrypterStub } = makeSut()

    const encrypterStubSpyOn = vitest.spyOn(encrypterStub, 'encrypt')

    await sut.execute(request)

    expect(encrypterStubSpyOn).toHaveBeenCalledTimes(1)
    expect(encrypterStubSpyOn).toHaveBeenCalledWith('valid_password')
  })

  it('should throw if encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()

    mockFactory().errorMock(encrypterStub, 'encrypt' as never)

    const promise = sut.execute(request)

    await expect(promise).rejects.toThrow()
  })
})
