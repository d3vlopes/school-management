import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'
import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'

import { validationLengthFields } from '@/presentation/helpers'

import {
  ILengthValidationFieldsParams,
  lengthValidationFields,
} from './validation'

import {
  returnExistsEmailError,
  returnInvalidEmailError,
  returnLengthValidationError,
  returnSuccess,
} from './helpers'

export class AdminRegisterUseCase
  implements IUseCase<AdminRegisterRequestDTO, AdminModel>
{
  constructor(
    private readonly adminRepository: IAdminRepository,
    private readonly encrypter: IEncrypter,
    private readonly validator: IValidator,
  ) {}

  async execute({
    email,
    name,
    password,
  }: AdminRegisterRequestDTO): Promise<
    IUseCaseResponse<AdminModel | null>
  > {
    const lengthFields: ILengthValidationFieldsParams = {
      fields: { password, name },
    }

    const isEmailValid = this.validator.isEmail(email)

    if (!isEmailValid) {
      return returnInvalidEmailError()
    }

    const isEmailAlreadyRegistered =
      await this.adminRepository.findByEmail(email)

    if (isEmailAlreadyRegistered) {
      return returnExistsEmailError()
    }

    const lengthValidationError = validationLengthFields(
      lengthValidationFields({ ...lengthFields }),
      this.validator,
    )

    if (lengthValidationError) {
      return returnLengthValidationError(lengthValidationError)
    }

    const cryptedPassword = await this.encrypter.encrypt(password)

    const user = await this.adminRepository.create({
      name,
      email,
      password: cryptedPassword,
    })

    return returnSuccess(user)
  }
}
