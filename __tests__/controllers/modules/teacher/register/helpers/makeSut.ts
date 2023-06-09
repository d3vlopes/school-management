import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { TeacherRegisterController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<
    TeacherRegisterRequestDTO,
    TeacherModel
  >()

  const sut = new TeacherRegisterController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
