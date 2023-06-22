import {
  encrypterStub,
  studentRepositoryStub,
  tokenStub,
} from '@/__tests__/stubs'

import { StudentLoginUseCase } from '@/useCases/modules/student'

export const makeSut = () => {
  const sut = new StudentLoginUseCase(
    studentRepositoryStub,
    encrypterStub,
    tokenStub,
  )

  return {
    sut,
    studentRepositoryStub,
    encrypterStub,
    tokenStub,
  }
}
