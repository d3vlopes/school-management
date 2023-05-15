import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'
import { handleUseCaseReturn } from '@/useCases/helpers'

export class AdminGetAllUseCase
  implements IUseCase<undefined, AdminModel[]>
{
  constructor(private readonly adminRepository: IAdminRepository) {}

  async execute(): Promise<IUseCaseResponse<AdminModel[] | null>> {
    const users = await this.adminRepository.findAll()

    return handleUseCaseReturn(users, null)
  }
}
