import { UseCaseStub } from '@/__tests__/stubs'

import { StudentModel } from '@/core/models'

import { StudentGetByIdController } from '@/presentation/controllers/modules/student'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<string, StudentModel>()

  const sut = new StudentGetByIdController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
