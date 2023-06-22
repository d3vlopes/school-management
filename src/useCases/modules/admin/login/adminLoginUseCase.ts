import { AdminLoginRequestDTO } from '@/core/dtos/admin'
import { IAdminRepository } from '@/core/repositories'

import { IEncrypter, IToken } from '@/useCases/contracts/adapters'
import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { handleUseCaseReturn } from '@/useCases/helpers'

import { invalidCredentials } from './helpers'

export class AdminLoginUseCase
  implements IUseCase<AdminLoginRequestDTO, string>
{
  constructor(
    private readonly adminRepository: IAdminRepository,
    private readonly encrypter: IEncrypter,
    private readonly token: IToken,
  ) {}

  async execute({
    email,
    password,
  }: AdminLoginRequestDTO): Promise<IUseCaseResponse<string | null>> {
    const user = await this.adminRepository.findOne({ email })

    if (!user) {
      return invalidCredentials()
    }

    const isPasswordValid = await this.encrypter.compare(
      password,
      user.password,
    )

    if (!isPasswordValid) {
      return invalidCredentials()
    }

    const token = this.token.generateToken({
      id: user.id,
      role: user.role,
    })

    return handleUseCaseReturn(token, null)
  }
}
