import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherModel } from '@/core/models'

import { TeacherGetByIdController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<string, TeacherModel>()

  const sut = new TeacherGetByIdController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
