import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { adminNotFoundError, success } from './helpers'

export class AdminGetProfileUseCase
  implements IUseCase<string, AdminModel>
{
  constructor(private readonly adminRepository: IAdminRepository) {}

  async execute(
    userId: string,
  ): Promise<IUseCaseResponse<AdminModel | null>> {
    const user = await this.adminRepository.findOne({ id: userId })

    if (!user) {
      return adminNotFoundError()
    }

    return success(user)
  }
}
