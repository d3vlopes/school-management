import { AdminUpdateRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import {
  invalidEmailError,
  invalidNameError,
  invalidPasswordError,
  success,
} from '@/useCases/helpers'

import { existsEmailError } from './helpers'

export class AdminUpdateUseCase
  implements IUseCase<AdminUpdateRequestDTO, AdminModel>
{
  constructor(
    private readonly adminRepository: IAdminRepository,
    private readonly encrypter: IEncrypter,
    private readonly validator: IValidator,
  ) {}

  async execute({
    id,
    name,
    email,
    password,
  }: AdminUpdateRequestDTO): Promise<
    IUseCaseResponse<AdminModel | null>
  > {
    if (email) {
      const isEmailValid = this.validator.isEmail(email)

      if (!isEmailValid) {
        return invalidEmailError()
      }
    }

    if (password) {
      const isPasswordValid = this.validator.isLength(password, 6, 30)

      if (!isPasswordValid) {
        return invalidPasswordError()
      }
    }

    if (name) {
      const isNameValid = this.validator.isLength(name, 3, 30)

      if (!isNameValid) {
        return invalidNameError()
      }
    }

    const isEmailAlreadyRegistered =
      await this.adminRepository.findOne({ email })

    if (isEmailAlreadyRegistered) {
      return existsEmailError()
    }

    if (password) {
      const passwordEncrypted = await this.encrypter.encrypt(password)

      const admin = await this.adminRepository.findByIdAndUpdate(id, {
        name,
        email,
        password: passwordEncrypted,
      })

      return success(admin)
    } else {
      const admin = await this.adminRepository.findByIdAndUpdate(id, {
        name,
        email,
      })

      return success(admin)
    }
  }
}
