import { AcademicYearDeleteRequestDTO } from '@/core/dtos/academicYear'

import {
  IAcademicYearRepository,
  IAdminRepository,
} from '@/core/repositories'

import { ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class AcademicYearDeleteUseCase
  implements IUseCase<AcademicYearDeleteRequestDTO, string>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
    private readonly adminRepository: IAdminRepository,
  ) {}

  async execute({
    id,
    userId,
  }: AcademicYearDeleteRequestDTO): Promise<
    IUseCaseResponse<string | null>
  > {
    const academicYearFound =
      await this.academicYearRepository.findOne({ id })

    if (!academicYearFound) {
      return error(ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE)
    }

    await this.academicYearRepository.delete(id)

    await this.adminRepository.findByIdAndUpdate(
      userId,
      { academicYearId: id },
      'pull',
    )

    return success('Academic year delete successfully')
  }
}
