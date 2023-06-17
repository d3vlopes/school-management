import { vitest, it, expect, describe } from 'vitest'

import { teacherMock } from '@/__tests__/mocks/modules'

import { invalidEmailMock, invalidPasswordMock } from './mocks'

import { makeSut } from './helpers'

describe('TeacherLoginUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut } = makeSut()

    const spyOnTeacherRepository = invalidEmailMock()

    const response = await sut.execute({
      email: 'invalid_email@provider.com',
      password: 'any_password',
    })

    expect(spyOnTeacherRepository).toHaveBeenCalledWith({
      email: 'invalid_email@provider.com',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Invalid login credentials',
    })
  })

  it('should return error if password is invalid', async () => {
    const { sut } = makeSut()

    const spyOnEncrypterStub = invalidPasswordMock()

    const response = await sut.execute({
      email: 'any_email@provider.com',
      password: 'invalid_password',
    })

    expect(spyOnEncrypterStub).toHaveBeenCalledWith(
      'invalid_password',
      teacherMock.password,
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
      id: teacherMock.id,
      role: teacherMock.role,
    })

    expect(response).toStrictEqual({
      data: 'generated_token',
      error: null,
    })
  })
})
