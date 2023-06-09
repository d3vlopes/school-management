import { TeacherModel } from '@/core/models'
import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'
import { ITeacherRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'
import { error, success } from '@/useCases/helpers'

import { validationLengthFields } from '@/presentation/helpers'

import {
  ILengthValidationFieldsParams,
  lengthValidationFields,
} from './validations'

import { generateTeacherID } from './helpers'

import {
  emailAlreadyRegisterError,
  invalidEmailError,
} from './errors'

export class TeacherRegisterUseCase
  implements IUseCase<TeacherRegisterRequestDTO, TeacherModel>
{
  constructor(
    private readonly teacherRepository: ITeacherRepository,
    private readonly validator: IValidator,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute({
    name,
    email,
    password,
  }: TeacherRegisterRequestDTO): Promise<
    IUseCaseResponse<TeacherModel | null>
  > {
    const isEmailValid = this.validator.isEmail(email)

    if (!isEmailValid) {
      return invalidEmailError()
    }

    const lengthFields: ILengthValidationFieldsParams = {
      fields: { password, name },
    }

    const lengthError = validationLengthFields(
      lengthValidationFields({ ...lengthFields }),
      this.validator,
    )

    if (lengthError) {
      return error(lengthError)
    }

    const emailAlreadyRegister = await this.teacherRepository.findOne(
      { email },
    )

    if (emailAlreadyRegister) {
      return emailAlreadyRegisterError()
    }

    const passwordEncrypted = await this.encrypter.encrypt(password)

    const generatedTeacherID = generateTeacherID(name)

    const teacher = await this.teacherRepository.create({
      name,
      email,
      password: passwordEncrypted,
      teacherId: generatedTeacherID,
    })

    return success(teacher)
  }
}
