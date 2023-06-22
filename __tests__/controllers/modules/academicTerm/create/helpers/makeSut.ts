import { UseCaseStub } from '@/__tests__/stubs'

import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import { AcademicTermCreateController } from '@/presentation/controllers/modules/academicTerm'

export const makeSut = () => {
  const academicTermCreateUseCaseStub = new UseCaseStub<
    AcademicTermCreateRequestDTO,
    AcademicTermModel
  >()

  const sut = new AcademicTermCreateController(
    academicTermCreateUseCaseStub,
  )

  return {
    sut,
    academicTermCreateUseCaseStub,
  }
}
