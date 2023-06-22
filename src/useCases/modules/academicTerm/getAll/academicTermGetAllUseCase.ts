import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export class AcademicTermGetAllUseCase
  implements IUseCase<null, AcademicTermModel[]>
{
  constructor(
    private readonly academicTermRepository: IAcademicTermRepository,
  ) {}

  async execute(): Promise<
    IUseCaseResponse<AcademicTermModel[] | null>
  > {
    const academicTerms = await this.academicTermRepository.findAll()

    return success(academicTerms)
  }
}
