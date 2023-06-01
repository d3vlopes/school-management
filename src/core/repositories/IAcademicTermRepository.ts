import { AcademicTermModel } from '@/core/models'
import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'

export interface IAcademicTermRepository {
  findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null>
  create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel>
  findAll: () => Promise<AcademicTermModel[]>
}
