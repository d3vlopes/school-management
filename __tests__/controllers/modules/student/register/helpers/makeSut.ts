import { UseCaseStub } from '@/__tests__/stubs'

import { StudentRegisterRequestDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'

import { StudentRegisterController } from '@/presentation/controllers/modules/student'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<
    StudentRegisterRequestDTO,
    StudentModel
  >()

  const sut = new StudentRegisterController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
