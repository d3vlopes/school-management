import {
  encrypterStub,
  teacherRepositoryStub,
  tokenStub,
} from '@/__tests__/stubs'

import { TeacherLoginUseCase } from '@/useCases/modules/teacher'

export const makeSut = () => {
  const sut = new TeacherLoginUseCase(
    teacherRepositoryStub,
    encrypterStub,
    tokenStub,
  )

  return {
    sut,
    teacherRepositoryStub,
    encrypterStub,
    tokenStub,
  }
}
