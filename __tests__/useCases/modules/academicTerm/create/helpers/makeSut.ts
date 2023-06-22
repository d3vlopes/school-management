import {
  academicTermRepositoryStub,
  adminRepositoryStub,
} from '@/__tests__/stubs'

import { AcademicTermCreateUseCase } from '@/useCases/modules/academicTerm'

export const makeSut = () => {
  const sut = new AcademicTermCreateUseCase(
    academicTermRepositoryStub,
    adminRepositoryStub,
  )

  return {
    sut,
    academicTermRepositoryStub,
    adminRepositoryStub,
  }
}
