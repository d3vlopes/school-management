import { IStudentRepository } from '@/core/repositories'
import { StudentLoginRequestDTO } from '@/core/dtos/student'

import { IEncrypter, IToken } from '@/useCases/contracts/adapters'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'
import { success } from '@/useCases/helpers'

import { invalidCredentialsError } from './errors'

export class StudentLoginUseCase
  implements IUseCase<StudentLoginRequestDTO, string>
{
  constructor(
    private readonly studentRepository: IStudentRepository,
    private readonly encrypter: IEncrypter,
    private readonly token: IToken,
  ) {}

  async execute({
    email,
    password,
  }: StudentLoginRequestDTO): Promise<
    IUseCaseResponse<string | null>
  > {
    const student = await this.studentRepository.findOne({ email })

    if (!student) {
      return invalidCredentialsError()
    }

    const isPasswordValid = await this.encrypter.compare(
      password,
      student.password,
    )

    if (!isPasswordValid) {
      return invalidCredentialsError()
    }

    const token = this.token.generateToken({
      id: student.id,
      role: student.role,
    })

    return success(token)
  }
}
