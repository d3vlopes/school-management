import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicYearModel } from '@/core/models'

import { AcademicYearUpdateController } from '@/presentation/controllers/modules/academicYear'
import { AcademicYearUpdateUseCaseData } from '@/useCases/modules/academicYear'

export const makeSut = () => {
  const academicYearUpdateUseCaseStub = new UseCaseStub<
    AcademicYearUpdateUseCaseData,
    AcademicYearModel
  >()

  const sut = new AcademicYearUpdateController(
    academicYearUpdateUseCaseStub,
  )

  return {
    sut,
    academicYearUpdateUseCaseStub,
  }
}
