import {
  encrypterStub,
  teacherRepositoryStub,
  validatorStub,
} from '@/__tests__/stubs'

import { TeacherUpdateUseCase } from '@/useCases/modules/teacher'

export const makeSut = () => {
  const sut = new TeacherUpdateUseCase(
    teacherRepositoryStub,
    validatorStub,
    encrypterStub,
  )

  return {
    sut,
    teacherRepositoryStub,
    validatorStub,
    encrypterStub,
  }
}
