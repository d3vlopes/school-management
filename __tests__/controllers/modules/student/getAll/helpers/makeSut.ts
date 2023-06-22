import { UseCaseStub } from '@/__tests__/stubs'

import { StudentModel } from '@/core/models'

import { StudentGetAllController } from '@/presentation/controllers/modules/student'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<null, StudentModel[]>()

  const sut = new StudentGetAllController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
