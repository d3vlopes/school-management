import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicTermDeleteController } from '@/presentation/controllers/modules/academicTerm'

export const makeSut = () => {
  const academicTermDeleteUseCaseStub = new UseCaseStub<
    string,
    string
  >()

  const sut = new AcademicTermDeleteController(
    academicTermDeleteUseCaseStub,
  )

  return {
    sut,
    academicTermDeleteUseCaseStub,
  }
}
