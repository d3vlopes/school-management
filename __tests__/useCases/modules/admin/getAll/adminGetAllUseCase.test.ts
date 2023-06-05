import { vitest, it, expect, describe } from 'vitest'

import { adminRepositoryStub } from '@/__tests__/stubs'
import { adminsMock } from '@/__tests__/mocks/modules'

import { mockFactory } from '@/__tests__/helpers'

import { AdminGetAllUseCase } from '@/useCases/modules/admin'

const makeSut = () => {
  const sut = new AdminGetAllUseCase(adminRepositoryStub)

  return {
    sut,
    adminRepositoryStub,
  }
}

describe('AdminGetAllUseCase', () => {
  it('should get all admins', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepositoryStub = vitest.spyOn(
      adminRepositoryStub,
      'findAll',
    )

    const response = await sut.execute()

    expect(spyOnAdminRepositoryStub).toHaveBeenCalled()

    expect(response).toStrictEqual({
      data: adminsMock,
      error: null,
    })
  })

  it('should throw if AdminRepository throws', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    mockFactory().errorMock(adminRepositoryStub, 'findAll' as never)

    const response = sut.execute()

    await expect(response).rejects.toThrow()
  })
})
