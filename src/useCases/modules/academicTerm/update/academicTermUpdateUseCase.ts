import { AcademicTermUpdateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export type AcademicTermUpdateUseCaseData =
  AcademicTermUpdateRequestDTO & { id: string }

export class AcademicTermUpdateUseCase
  implements
    IUseCase<AcademicTermUpdateRequestDTO, AcademicTermModel>
{
  constructor(
    private readonly academicTermRepository: IAcademicTermRepository,
  ) {}

  async execute({
    id,
    description,
    duration,
    name,
  }: AcademicTermUpdateUseCaseData): Promise<
    IUseCaseResponse<AcademicTermModel | null>
  > {
    const existsAcademicTermName =
      await this.academicTermRepository.findOne({ name })

    if (existsAcademicTermName) {
      return error('Academic term already exists with that name')
    }

    const updateAcademicTerm =
      await this.academicTermRepository.update(id, {
        name,
        description,
        duration,
      })

    if (!updateAcademicTerm) {
      return error('Academic term not found')
    }

    return success(updateAcademicTerm)
  }
}
