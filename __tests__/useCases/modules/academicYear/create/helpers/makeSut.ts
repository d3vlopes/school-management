import {
  academicYearRepositoryStub,
  adminRepositoryStub,
  validatorStub,
} from '@/__tests__/stubs'

import { AcademicYearCreateUseCase } from '@/useCases/modules/academicYear'

export const makeSut = () => {
  const sut = new AcademicYearCreateUseCase(
    academicYearRepositoryStub,
    validatorStub,
    adminRepositoryStub,
  )

  return {
    sut,
    validatorStub,
    academicYearRepositoryStub,
    adminRepositoryStub,
  }
}
