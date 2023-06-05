import { expect, it, describe, vitest } from 'vitest'

import { adminRepositoryStub } from '@/__tests__/stubs'
import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'
import { mockFactory } from '@/__tests__/helpers'

import { AdminGetProfileUseCase } from '@/useCases/modules/admin'

import { ADMIN_GET_PROFILE_NOT_FOUND_MESSAGE_ERROR } from '@/useCases/modules/admin/getProfile/constants'

export const makeSut = () => {
  const sut = new AdminGetProfileUseCase(adminRepositoryStub)

  return {
    sut,
    adminRepositoryStub,
  }
}

describe('AdminGetProfileUseCase', () => {
  it('should return error if admin not found', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = vitest
      .spyOn(adminRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute('user_id')

    expect(spyOnAdminRepositoryStub).toHaveBeenCalledWith({
      id: 'user_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: ADMIN_GET_PROFILE_NOT_FOUND_MESSAGE_ERROR,
    })
  })

  it('should throw if AdminRepository throws', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    mockFactory().errorMock(adminRepositoryStub, 'findOne' as never)

    const promise = sut.execute('user_id')

    await expect(promise).rejects.toThrow()
  })

  it('should return admin profile data', async () => {
    const { sut } = makeSut()

    const response = await sut.execute('user_id')

    expect(response).toStrictEqual({
      data: adminMock,
      error: null,
    })
  })
})
