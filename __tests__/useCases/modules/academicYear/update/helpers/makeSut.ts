import {
  academicYearRepositoryStub,
  validatorStub,
} from '@/__tests__/stubs'

import { AcademicYearUpdateUseCase } from '@/useCases/modules/academicYear'

export const makeSut = () => {
  const sut = new AcademicYearUpdateUseCase(
    validatorStub,
    academicYearRepositoryStub,
  )

  return {
    sut,
    validatorStub,
    academicYearRepositoryStub,
  }
}
