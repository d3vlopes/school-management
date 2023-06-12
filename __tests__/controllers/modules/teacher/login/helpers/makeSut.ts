import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherLoginRequestDTO } from '@/core/dtos/teacher'

import { TeacherLoginController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<
    TeacherLoginRequestDTO,
    string
  >()

  const sut = new TeacherLoginController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
