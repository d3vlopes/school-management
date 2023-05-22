import {
  academicYearRepositoryStub,
  validatorStub,
} from '@/__test__/stubs'

import { AcademicYearCreateUseCase } from '@/useCases/modules/academicYear'

export const makeSut = () => {
  const sut = new AcademicYearCreateUseCase(
    academicYearRepositoryStub,
    validatorStub,
  )

  return {
    sut,
    validatorStub,
    academicYearRepositoryStub,
  }
}
