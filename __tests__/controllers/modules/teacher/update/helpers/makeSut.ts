import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherUpdateRequestDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { TeacherUpdateController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<
    TeacherUpdateRequestDTO,
    TeacherModel
  >()

  const sut = new TeacherUpdateController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
