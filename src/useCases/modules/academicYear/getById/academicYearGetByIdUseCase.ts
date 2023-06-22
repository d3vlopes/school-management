import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import { ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class AcademicYearGetByIdUseCase
  implements IUseCase<string, AcademicYearModel>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
  ) {}

  async execute(
    id: string,
  ): Promise<IUseCaseResponse<AcademicYearModel | null>> {
    const academicYear = await this.academicYearRepository.findOne({
      id,
    })

    if (!academicYear) {
      return error(ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE)
    }

    return success(academicYear)
  }
}
