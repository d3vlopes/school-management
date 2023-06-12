import { TeacherModel } from '@/core/models'
import { ITeacherRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export class TeacherGetAllUseCase
  implements IUseCase<null, TeacherModel[]>
{
  constructor(
    private readonly teacherRepository: ITeacherRepository,
  ) {}

  async execute(): Promise<IUseCaseResponse<TeacherModel[] | null>> {
    const teachers = await this.teacherRepository.findAll()

    return success(teachers)
  }
}
