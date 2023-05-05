import { describe, expect, it, vitest } from 'vitest'

import { makeSut } from './helpers'

import { requestMockFactory } from './mock'

describe('AdminRegisterUseCase', () => {
  it('should not register if email is exists', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const adminRepositorySpyOn = vitest.spyOn(
      adminRepositoryStub,
      'create',
    )

    vitest
      .spyOn(adminRepositoryStub, 'findByEmail')
      .mockResolvedValueOnce(true)

    const response = await sut.execute(requestMockFactory)

    expect(adminRepositorySpyOn).toHaveBeenCalledTimes(0)

    expect(response).toStrictEqual({
      data: null,
      error: 'Admin already registered with this email',
    })
  })

  it('should register a new admin user', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const adminRepositorySpyOn = vitest.spyOn(
      adminRepositoryStub,
      'create',
    )

    const response = await sut.execute(requestMockFactory)

    expect(adminRepositorySpyOn).toHaveBeenCalledTimes(1)

    expect(response).toStrictEqual({
      data: {
        id: '1234',
        name: 'User Name',
        email: 'user@email.com',
        role: 'admin',
        password: 'password_encrypted',
        academicTerms: [],
        academicYears: [],
        classLevels: [],
        programs: [],
        students: [],
        teachers: [],
        yearGroups: [],
        createdAt: new Date(23, 5),
        updatedAt: new Date(23, 5),
      },
      error: null,
    })
  })

  it('should call encrypt method of encrypter', async () => {
    const { sut, encrypterStub } = makeSut()

    const encrypterStubSpyOn = vitest.spyOn(encrypterStub, 'encrypt')

    await sut.execute(requestMockFactory)

    expect(encrypterStubSpyOn).toHaveBeenCalledTimes(1)
    expect(encrypterStubSpyOn).toHaveBeenCalledWith('any_password')
  })

  it('should throw if encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()

    vitest
      .spyOn(encrypterStub, 'encrypt')
      .mockRejectedValueOnce(new Error())

    const promise = sut.execute(requestMockFactory)

    await expect(promise).rejects.toThrow()
  })
})
