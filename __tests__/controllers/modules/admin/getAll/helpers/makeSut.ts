import { adminsMock } from '@/__tests__/mocks/modules'

import { AdminModel } from '@/core/models'

import { AdminGetAllController } from '@/presentation/controllers/modules/admin'
import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

export const makeSut = () => {
  class AdminGetAllUseCaseStub
    implements IUseCase<undefined, AdminModel[]>
  {
    async execute(): Promise<IUseCaseResponse<AdminModel[] | null>> {
      return {
        data: adminsMock,
        error: null,
      }
    }
  }

  const adminGetAllUseCaseStub = new AdminGetAllUseCaseStub()

  const sut = new AdminGetAllController(adminGetAllUseCaseStub)

  return {
    sut,
    adminGetAllUseCaseStub,
  }
}
