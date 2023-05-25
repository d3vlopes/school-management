import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import { error, success } from '@/useCases/helpers'

import { IValidator } from '@/useCases/contracts/adapters'

import { existsAcademicYearError, invalidYearError } from './helpers'

export class AcademicYearCreateUseCase
  implements
    IUseCase<AcademicYearCreateRequestDTO, AcademicYearModel>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
    private readonly validator: IValidator,
  ) {}

  async execute({
    name,
    year,
    createdBy,
  }: AcademicYearCreateRequestDTO): Promise<
    IUseCaseResponse<AcademicYearModel | null>
  > {
    const currentYear = new Date().getFullYear()

    const isNameValid = this.validator.isLength(name, 4, 20)
    const isYearValid = this.validator.isNumber(
      year,
      1994,
      currentYear,
    )

    if (!isNameValid) {
      return error(ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE)
    }

    if (!isYearValid) {
      return invalidYearError()
    }

    const existsAcademicYear =
      await this.academicYearRepository.findOne({ name })

    if (existsAcademicYear) {
      return existsAcademicYearError()
    }

    const academicYear = await this.academicYearRepository.create({
      name,
      year,
      createdBy,
    })

    return success(academicYear)
  }
}
