import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { createAdminMockFactory } from '@/__test__/mocks'
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
        data: createAdminMockFactory,
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
