import { ITeacherRepository } from '@/core/repositories'
import { TeacherLoginRequestDTO } from '@/core/dtos/teacher'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { IEncrypter, IToken } from '@/useCases/contracts/adapters'
import { success } from '@/useCases/helpers'

import { invalidCredentialsError } from './errors'

export class TeacherLoginUseCase
  implements IUseCase<TeacherLoginRequestDTO, string>
{
  constructor(
    private readonly teacherRepository: ITeacherRepository,
    private readonly encrypter: IEncrypter,
    private readonly token: IToken,
  ) {}

  async execute({
    email,
    password,
  }: TeacherLoginRequestDTO): Promise<
    IUseCaseResponse<string | null>
  > {
    const teacher = await this.teacherRepository.findOne({ email })

    if (!teacher) {
      return invalidCredentialsError()
    }

    const isPasswordValid = await this.encrypter.compare(
      password,
      teacher.password,
    )

    if (!isPasswordValid) {
      return invalidCredentialsError()
    }

    const token = this.token.generateToken({
      id: teacher.id,
      role: teacher.role,
    })

    return success(token)
  }
}
