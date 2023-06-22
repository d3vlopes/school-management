import { AdminLoginRequestDTO } from '@/core/dtos/admin'
import { AdminLoginController } from '@/presentation/controllers/modules/admin'
import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

export const makeSut = () => {
  class AdminLoginUseCaseStub
    implements IUseCase<AdminLoginRequestDTO, string>
  {
    async execute(): Promise<IUseCaseResponse<string>> {
      return {
        data: 'generated_token',
        error: null,
      }
    }
  }

  const adminLoginUseCaseStub = new AdminLoginUseCaseStub()

  const sut = new AdminLoginController(adminLoginUseCaseStub)

  return {
    sut,
    adminLoginUseCaseStub,
  }
}
