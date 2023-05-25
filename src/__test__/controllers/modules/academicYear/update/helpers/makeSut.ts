import { UseCaseStub } from '@/__test__/stubs'
import { AcademicYearUpdateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'

import { AcademicYearUpdateController } from '@/presentation/controllers/modules/academicYear'

export const makeSut = () => {
  const academicYearUpdateUseCaseStub = new UseCaseStub<
    AcademicYearUpdateRequestDTO,
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
