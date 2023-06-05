import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

import { AdminModel } from '@/core/models'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { AdminGetProfileController } from '@/presentation/controllers/modules/admin'

export const makeSut = () => {
  class AdminGetProfileUseCaseStub
    implements IUseCase<string, AdminModel>
  {
    async execute(
      data: string,
    ): Promise<IUseCaseResponse<AdminModel | null>> {
      return {
        data: adminMock,
        error: null,
      }
    }
  }

  const adminGetProfileUseCaseStub = new AdminGetProfileUseCaseStub()

  const sut = new AdminGetProfileController(
    adminGetProfileUseCaseStub,
  )

  return {
    sut,
    adminGetProfileUseCaseStub,
  }
}
