import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicTermModel } from '@/core/models'
import { AcademicTermGetByIdController } from '@/presentation/controllers/modules/academicTerm'

export const makeSut = () => {
  const academicTermGetByIdUseCaseStub = new UseCaseStub<
    string,
    AcademicTermModel
  >()

  const sut = new AcademicTermGetByIdController(
    academicTermGetByIdUseCaseStub,
  )

  return {
    sut,
    academicTermGetByIdUseCaseStub,
  }
}
