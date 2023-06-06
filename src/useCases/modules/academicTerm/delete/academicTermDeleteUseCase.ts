import { AcademicTermDeleteRequestDTO } from '@/core/dtos/academicTerm'

import {
  IAcademicTermRepository,
  IAdminRepository,
} from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export class AcademicTermDeleteUseCase
  implements IUseCase<AcademicTermDeleteRequestDTO, string>
{
  constructor(
    private readonly academicTermRepository: IAcademicTermRepository,
    private readonly adminRepository: IAdminRepository,
  ) {}

  async execute({
    id,
    userId,
  }: AcademicTermDeleteRequestDTO): Promise<
    IUseCaseResponse<string | null>
  > {
    const academicTermFound =
      await this.academicTermRepository.findOne({ id })

    if (!academicTermFound) {
      return error('Academic term not found')
    }

    await this.adminRepository.findByIdAndUpdate(
      userId,
      { academicTermId: id },
      'pull',
    )

    await this.academicTermRepository.delete(id)

    return success('Academic term delete successfully')
  }
}
