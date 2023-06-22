import {
  academicTermRepositoryStub,
  adminRepositoryStub,
} from '@/__tests__/stubs'

import { AcademicTermDeleteUseCase } from '@/useCases/modules/academicTerm'

export const makeSut = () => {
  const sut = new AcademicTermDeleteUseCase(
    academicTermRepositoryStub,
    adminRepositoryStub,
  )

  return {
    sut,
    academicTermRepositoryStub,
    adminRepositoryStub,
  }
}
