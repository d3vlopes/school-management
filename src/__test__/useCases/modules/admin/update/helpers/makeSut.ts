import {
  adminRepositoryStub,
  encrypterStub,
  validatorStub,
} from '@/__test__/stubs'

import { AdminUpdateUseCase } from '@/useCases/modules/admin'

export const makeSut = () => {
  const sut = new AdminUpdateUseCase(
    adminRepositoryStub,
    encrypterStub,
    validatorStub,
  )

  return {
    sut,
    adminRepositoryStub,
    encrypterStub,
    validatorStub,
  }
}
