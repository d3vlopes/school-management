import {
  adminRepositoryStub,
  encrypterStub,
  tokenStub,
} from '@/__tests__/stubs'

import { AdminLoginUseCase } from '@/useCases/modules/admin'

export const makeSut = () => {
  const sut = new AdminLoginUseCase(
    adminRepositoryStub,
    encrypterStub,
    tokenStub,
  )

  return {
    sut,
    adminRepositoryStub,
    encrypterStub,
    tokenStub,
  }
}
