import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicYearModel } from '@/core/models'

import { AcademicYearGetByIdController } from '@/presentation/controllers/modules/academicYear'

export const makeSut = () => {
  const academicYearGetByIdUseCaseStub = new UseCaseStub<
    string,
    AcademicYearModel
  >()

  const sut = new AcademicYearGetByIdController(
    academicYearGetByIdUseCaseStub,
  )

  return {
    sut,
    academicYearGetByIdUseCaseStub,
  }
}
