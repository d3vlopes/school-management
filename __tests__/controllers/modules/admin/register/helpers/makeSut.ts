import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { AdminRegisterController } from '@/presentation/controllers/modules/admin'

export const makeSut = () => {
  class AdminRegisterUseCaseStub
    implements IUseCase<AdminRegisterRequestDTO, AdminModel>
  {
    async execute(
      data: AdminRegisterRequestDTO,
    ): Promise<IUseCaseResponse<AdminModel | null>> {
      return {
        data: adminMock,
        error: null,
      }
    }
  }

  const adminRegisterUseCaseStub = new AdminRegisterUseCaseStub()

  const sut = new AdminRegisterController(adminRegisterUseCaseStub)

  return {
    sut,
    adminRegisterUseCaseStub,
  }
}
