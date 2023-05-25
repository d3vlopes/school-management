import { vitest, it, expect, describe } from 'vitest'

import { adminRepositoryStub } from '@/__test__/stubs'
import { adminsMockFactory, errorMock } from '@/__test__/mocks'

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
      data: adminsMockFactory,
      error: null,
    })
  })

  it('should throw if AdminRepository throws', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    errorMock(adminRepositoryStub, 'findAll' as never)

    const response = sut.execute()

    await expect(response).rejects.toThrow()
  })
})
