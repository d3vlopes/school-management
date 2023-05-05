import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { createAdminMockFactory } from '@/test/mock'
import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { AdminRegisterController } from '@/presentation/controller/modules/admin/register/adminRegisterController'

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
