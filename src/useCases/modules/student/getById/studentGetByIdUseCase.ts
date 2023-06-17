import { StudentModel } from '@/core/models'
import { IStudentRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class StudentGetByIdUseCase
  implements IUseCase<string, StudentModel>
{
  constructor(
    private readonly studentRepository: IStudentRepository,
  ) {}

  async execute(
    id: string,
  ): Promise<IUseCaseResponse<StudentModel | null>> {
    const student = await this.studentRepository.findOne({ id })

    if (!student) {
      return error('Student not found')
    }

    return success(student)
  }
}
