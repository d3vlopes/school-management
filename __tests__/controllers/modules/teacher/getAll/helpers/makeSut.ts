import { UseCaseStub } from '@/__tests__/stubs'

import { TeacherModel } from '@/core/models'

import { TeacherGetAllController } from '@/presentation/controllers/modules/teacher'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<null, TeacherModel[]>()

  const sut = new TeacherGetAllController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
