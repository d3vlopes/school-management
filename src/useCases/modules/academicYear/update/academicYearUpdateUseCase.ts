import { AcademicYearUpdateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import {
  ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

import { IValidator } from '@/useCases/contracts/adapters'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export type AcademicYearUpdateUseCaseData =
  AcademicYearUpdateRequestDTO & { id: string; userId: string }

export class AcademicYearUpdateUseCase
  implements
    IUseCase<AcademicYearUpdateRequestDTO, AcademicYearModel>
{
  constructor(
    private readonly validator: IValidator,
    private readonly academicYearRepository: IAcademicYearRepository,
  ) {}

  async execute({
    id,
    userId,
    name,
    year,
    isCurrent,
  }: AcademicYearUpdateUseCaseData): Promise<
    IUseCaseResponse<AcademicYearModel | null>
  > {
    let isNameValid: Boolean
    let isYearValid: Boolean

    const currentYear = new Date().getFullYear()
    const minYear = 1994

    if (name) {
      isNameValid = this.validator.isLength(name, 4, 20)

      if (!isNameValid) {
        return error(ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE)
      }
    }

    if (year) {
      isYearValid = this.validator.isNumber(
        year,
        minYear,
        currentYear,
      )

      if (!isYearValid) {
        return error(ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE)
      }
    }

    const existsAcademicYearName =
      await this.academicYearRepository.findOne({ name })

    if (existsAcademicYearName) {
      return error(ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE)
    }

    const updateAcademicYear =
      await this.academicYearRepository.update(id, {
        name,
        year,
        createdBy: userId,
        isCurrent,
      })

    return success(updateAcademicYear)
  }
}
