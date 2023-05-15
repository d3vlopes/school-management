import { adminsMockFactory } from '@/__test__/mocks'

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
        data: adminsMockFactory,
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
