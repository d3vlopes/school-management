import {
  encrypterStub,
  studentRepositoryStub,
  validatorStub,
} from '@/__tests__/stubs'

import { StudentRegisterUseCase } from '@/useCases/modules/student'

export const makeSut = () => {
  const sut = new StudentRegisterUseCase(
    studentRepositoryStub,
    validatorStub,
    encrypterStub,
  )

  return {
    sut,
    studentRepositoryStub,
    validatorStub,
    encrypterStub,
  }
}
