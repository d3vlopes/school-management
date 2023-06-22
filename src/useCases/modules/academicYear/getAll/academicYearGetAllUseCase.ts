import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export class AcademicYearGetAllUseCase
  implements IUseCase<null, AcademicYearModel[]>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
  ) {}

  async execute(): Promise<
    IUseCaseResponse<AcademicYearModel[] | null>
  > {
    const academicYears = await this.academicYearRepository.findAll()

    return success(academicYears)
  }
}
