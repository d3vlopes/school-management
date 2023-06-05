import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'

import { AcademicYearCreateController } from '@/presentation/controllers/modules/academicYear'

export const makeSut = () => {
  const academicYearCreateUseCaseStub = new UseCaseStub<
    AcademicYearCreateRequestDTO,
    AcademicYearModel
  >()

  const sut = new AcademicYearCreateController(
    academicYearCreateUseCaseStub,
  )

  return {
    sut,
    academicYearCreateUseCaseStub,
  }
}
