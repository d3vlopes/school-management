import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import {
  IAcademicYearRepository,
  IAdminRepository,
} from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import { error, success } from '@/useCases/helpers'

import { IValidator } from '@/useCases/contracts/adapters'

import { existsAcademicYearError, invalidYearError } from './helpers'

export type AcademicYearCreateUseCaseData =
  AcademicYearCreateRequestDTO & {
    userId: string
  }

export class AcademicYearCreateUseCase
  implements
    IUseCase<AcademicYearCreateRequestDTO, AcademicYearModel>
{
  constructor(
    private readonly academicYearRepository: IAcademicYearRepository,
    private readonly validator: IValidator,
    private readonly adminRepository: IAdminRepository,
  ) {}

  async execute({
    name,
    year,
    userId,
  }: AcademicYearCreateUseCaseData): Promise<
    IUseCaseResponse<AcademicYearModel | null>
  > {
    const currentYear = new Date().getFullYear()
    const minYear = 1994

    const isNameValid = this.validator.isLength(name, 4, 20)
    const isYearValid = this.validator.isNumber(
      year,
      minYear,
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
      createdBy: userId,
    })

    await this.adminRepository.findByIdAndUpdate(
      userId,
      {
        academicYearId: academicYear.id,
      },
      'push',
    )

    return success(academicYear)
  }
}
