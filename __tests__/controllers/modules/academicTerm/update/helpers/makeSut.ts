import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicTermUpdateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import { AcademicTermUpdateController } from '@/presentation/controllers/modules/academicTerm'

export const makeSut = () => {
  const academicTermUpdateUseCaseStub = new UseCaseStub<
    AcademicTermUpdateRequestDTO,
    AcademicTermModel
  >()

  const sut = new AcademicTermUpdateController(
    academicTermUpdateUseCaseStub,
  )

  return {
    sut,
    academicTermUpdateUseCaseStub,
  }
}
