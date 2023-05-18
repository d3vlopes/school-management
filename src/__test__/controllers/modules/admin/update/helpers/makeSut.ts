import { AdminUpdateRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { createAdminMockFactory as adminMock } from '@/__test__/mocks'

import { AdminUpdateController } from '@/presentation/controllers/modules/admin'

export const makeSut = () => {
  class AdminUpdateUseCaseStub
    implements IUseCase<AdminUpdateRequestDTO, AdminModel>
  {
    async execute(
      data?: AdminUpdateRequestDTO | undefined,
    ): Promise<IUseCaseResponse<AdminModel | null>> {
      return {
        data: {
          ...adminMock,
          name: 'Update admin name',
        },
        error: null,
      }
    }
  }

  const adminUpdateUseCaseStub = new AdminUpdateUseCaseStub()

  const sut = new AdminUpdateController(adminUpdateUseCaseStub)

  return {
    sut,
    adminUpdateUseCaseStub,
  }
}
