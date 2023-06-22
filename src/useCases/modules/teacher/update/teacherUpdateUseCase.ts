import { TeacherModel } from '@/core/models'
import { TeacherUpdateRequestDTO } from '@/core/dtos/teacher'
import { ITeacherRepository } from '@/core/repositories'

import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

export class TeacherUpdateUseCase
  implements IUseCase<TeacherUpdateRequestDTO, TeacherModel>
{
  constructor(
    private readonly teacherRepository: ITeacherRepository,
    private readonly validator: IValidator,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute({
    id,
    email,
    name,
    password,
  }: TeacherUpdateRequestDTO): Promise<
    IUseCaseResponse<TeacherModel | null>
  > {
    if (email) {
      const isEmailValid = this.validator.isEmail(email)

      if (!isEmailValid) {
        return {
          data: null,
          error: 'Invalid email address',
        }
      }

      const emailAlreadyRegistered =
        await this.teacherRepository.findOne({ email })

      if (emailAlreadyRegistered) {
        return {
          data: null,
          error: 'Email already registered',
        }
      }
    }

    if (name) {
      const isNameLengthValid = this.validator.isLength(name, 3, 30)

      if (!isNameLengthValid) {
        return {
          data: null,
          error: 'Name must be between 3 and 30 characters',
        }
      }
    }

    if (password) {
      const isPasswordLengthValid = this.validator.isLength(
        password,
        6,
        30,
      )

      if (!isPasswordLengthValid) {
        return {
          data: null,
          error: 'Password must be between 6 and 30 characters',
        }
      }

      const passwordEncrypted = await this.encrypter.encrypt(password)

      const teacherUpdate = await this.teacherRepository.update(id, {
        name,
        email,
        password: passwordEncrypted,
      })

      return {
        data: teacherUpdate,
        error: null,
      }
    } else {
      const teacherUpdate = await this.teacherRepository.update(id, {
        name,
        email,
      })

      return {
        data: teacherUpdate,
        error: null,
      }
    }
  }
}
