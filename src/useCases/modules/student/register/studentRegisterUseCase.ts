import { StudentRegisterRequestDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'
import { IStudentRepository } from '@/core/repositories'

import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

import { validationLengthFields } from '@/presentation/helpers'

import {
  ILengthValidationFieldsParams,
  lengthValidationFields,
} from './validations'

import { generateStudentID } from './helpers'

import {
  emailAlreadyRegisterError,
  invalidEmailError,
} from './errors'

export class StudentRegisterUseCase
  implements IUseCase<StudentRegisterRequestDTO, StudentModel>
{
  constructor(
    private readonly studentRepository: IStudentRepository,
    private readonly validator: IValidator,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute({
    email,
    name,
    password,
  }: StudentRegisterRequestDTO): Promise<
    IUseCaseResponse<StudentModel | null>
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

    const emailAlreadyRegister = await this.studentRepository.findOne(
      { email },
    )

    if (emailAlreadyRegister) {
      return emailAlreadyRegisterError()
    }

    const passwordEncrypted = await this.encrypter.encrypt(password)

    const generatedStudentID = generateStudentID(name)

    const student = await this.studentRepository.create({
      name,
      email,
      password: passwordEncrypted,
      studentId: generatedStudentID,
    })

    return success(student)
  }
}
