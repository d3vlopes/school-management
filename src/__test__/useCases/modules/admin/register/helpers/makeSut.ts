import { adminRepositoryStub, encrypterStub } from '@/__test__/stubs'

import { AdminRegisterUseCase } from '@/useCases/modules/admin/register/adminRegisterUseCase'

export const makeSut = () => {
  const sut = new AdminRegisterUseCase(
    adminRepositoryStub,
    encrypterStub,
  )

  return {
    sut,
    adminRepositoryStub,
    encrypterStub,
  }
}
