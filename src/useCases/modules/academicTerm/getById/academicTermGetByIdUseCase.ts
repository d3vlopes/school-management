import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class AcademicTermGetByIdUseCase
  implements IUseCase<string, AcademicTermModel>
{
  constructor(
    private readonly academicTermRepository: IAcademicTermRepository,
  ) {}

  async execute(
    id: string,
  ): Promise<IUseCaseResponse<AcademicTermModel | null>> {
    const academicTerm = await this.academicTermRepository.findOne({
      id,
    })

    if (!academicTerm) {
      return error('Academic term not found')
    }

    return success(academicTerm)
  }
}
