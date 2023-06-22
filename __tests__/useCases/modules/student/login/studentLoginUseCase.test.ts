import { vitest, it, expect, describe } from 'vitest'

import { studentMock } from '@/__tests__/mocks/modules'

import { invalidEmailMock, invalidPasswordMock } from './mocks'

import { makeSut } from './helpers'

describe('StudentLoginUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut } = makeSut()

    const spyOnStudentRepository = invalidEmailMock()

    const response = await sut.execute({
      email: 'invalid_email',
      password: 'any_password',
    })

    expect(spyOnStudentRepository).toBeCalledWith({
      email: 'invalid_email',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Invalid login credentials',
    })
  })

  it('should return error if password is invalid', async () => {
    const { sut } = makeSut()

    const spyOnEncrypter = invalidPasswordMock()

    const response = await sut.execute({
      email: 'any_email@provider.com',
      password: 'invalid_password',
    })

    expect(spyOnEncrypter).toBeCalledWith(
      'invalid_password',
      studentMock.password,
    )

    expect(response).toStrictEqual({
      data: null,
      error: 'Invalid login credentials',
    })
  })

  it('should return token if correct values is provided', async () => {
    const { sut, tokenStub } = makeSut()

    const spyOnTokenStub = vitest.spyOn(tokenStub, 'generateToken')

    const response = await sut.execute({
      email: 'valid_email@provider.com',
      password: 'valid_password',
    })

    expect(spyOnTokenStub).toBeCalledWith({
      id: studentMock.id,
      role: studentMock.role,
    })

    expect(response).toStrictEqual({
      data: 'generated_token',
      error: null,
    })
  })
})
