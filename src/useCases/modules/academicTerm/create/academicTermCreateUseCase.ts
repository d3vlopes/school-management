import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import {
  IAcademicTermRepository,
  IAdminRepository,
} from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export type AcademicTermCreateUseCaseData =
  AcademicTermCreateRequestDTO & {
    userId: string
  }

export class AcademicTermCreateUseCase
  implements
    IUseCase<AcademicTermCreateRequestDTO, AcademicTermModel>
{
  constructor(
    private readonly academicTermRepository: IAcademicTermRepository,
    private readonly adminRepository: IAdminRepository,
  ) {}

  async execute({
    userId,
    name,
    description,
    duration,
  }: AcademicTermCreateUseCaseData): Promise<
    IUseCaseResponse<AcademicTermModel | null>
  > {
    const existsAcademicTermWithName =
      await this.academicTermRepository.findOne({ name })

    if (existsAcademicTermWithName) {
      return error('Academic Term already exists with that name')
    }

    const academicTerm = await this.academicTermRepository.create({
      name,
      description,
      duration,
      createdBy: userId,
    })

    await this.adminRepository.findByIdAndUpdate(
      userId,
      { academicTermId: academicTerm.id },
      'push',
    )

    return success(academicTerm)
  }
}
