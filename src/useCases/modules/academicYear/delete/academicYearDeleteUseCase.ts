import { IAcademicYearRepository } from '@/core/repositories'

import { ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class AcademicYearDeleteUseCase
  implements IUseCase<string, string>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
  ) {}

  async execute(
    id: string,
  ): Promise<IUseCaseResponse<string | null>> {
    const academicYearFound =
      await this.academicYearRepository.findOne({ id })

    if (!academicYearFound) {
      return error(ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE)
    }

    await this.academicYearRepository.delete(id)

    return success('Academic year delete successfully')
  }
}
