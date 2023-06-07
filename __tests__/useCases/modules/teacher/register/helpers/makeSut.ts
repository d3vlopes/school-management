import {
  encrypterStub,
  teacherRepositoryStub,
  validatorStub,
} from '@/__tests__/stubs'

import { TeacherRegisterUseCase } from '@/useCases/modules/teacher'

export const makeSut = () => {
  const sut = new TeacherRegisterUseCase(
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
