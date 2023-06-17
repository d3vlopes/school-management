import { UseCaseStub } from '@/__tests__/stubs'

import { StudentLoginRequestDTO } from '@/core/dtos/student'

import { StudentLoginController } from '@/presentation/controllers/modules/student'

export const makeSut = () => {
  const useCaseStub = new UseCaseStub<
    StudentLoginRequestDTO,
    string
  >()

  const sut = new StudentLoginController(useCaseStub)

  return {
    sut,
    useCaseStub,
  }
}
