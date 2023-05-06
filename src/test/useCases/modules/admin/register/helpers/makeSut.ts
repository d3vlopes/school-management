import { adminRepositoryStub, encrypterStub } from '@/test/stubs'

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
