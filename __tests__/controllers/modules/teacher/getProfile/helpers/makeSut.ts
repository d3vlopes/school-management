import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherModel } from '@/core/models'

import { TeacherGetProfileController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<string, TeacherModel>()

  const sut = new TeacherGetProfileController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
