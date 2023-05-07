import {
  adminRepositoryStub,
  encrypterStub,
  tokenStub,
} from '@/test/stubs'

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
