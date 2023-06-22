import { TeacherModel } from '@/core/models'
import { ITeacherRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class TeacherGetProfileUseCase
  implements IUseCase<string, TeacherModel>
{
  constructor(
    private readonly teacherRepository: ITeacherRepository,
  ) {}

  async execute(
    teacherId: string,
  ): Promise<IUseCaseResponse<TeacherModel | null>> {
    const teacher = await this.teacherRepository.findOne({
      id: teacherId,
    })

    if (!teacher) {
      return error('Teacher not found')
    }

    return success(teacher)
  }
}
