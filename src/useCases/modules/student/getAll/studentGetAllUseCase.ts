import { StudentModel } from '@/core/models'
import { IStudentRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export class StudentGetAllUseCase
  implements IUseCase<null, StudentModel[]>
{
  constructor(
    private readonly studentRepository: IStudentRepository,
  ) {}

  async execute(): Promise<IUseCaseResponse<StudentModel[] | null>> {
    const students = await this.studentRepository.findAll()

    return success(students)
  }
}
