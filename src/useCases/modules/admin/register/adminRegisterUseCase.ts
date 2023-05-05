import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { IEncrypter } from '@/useCases/contracts/adapters'
import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { handleUseCaseReturn } from '@/useCases/helpers'

export class AdminRegisterUseCase
  implements IUseCase<AdminRegisterRequestDTO, AdminModel>
{
  constructor(
    private readonly adminRepository: IAdminRepository,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute({
    name,
    email,
    password,
  }: AdminRegisterRequestDTO): Promise<
    IUseCaseResponse<AdminModel | null>
  > {
    const isEmailAlreadyRegistered =
      await this.adminRepository.findByEmail(email)

    if (isEmailAlreadyRegistered) {
      const errorMessage = 'Admin already registered with this email'

      return handleUseCaseReturn(null, errorMessage)
    }

    const cryptedPassword = await this.encrypter.encrypt(password)

    const user = await this.adminRepository.create({
      name,
      email,
      password: cryptedPassword,
    })

    return handleUseCaseReturn<AdminModel>(user, null)
  }
}
