import { AcademicTermModel } from '@/core/models'
import { AcademicTermCreateRequestDTO } from '../dtos/academicTerm'

export interface IAcademicTermRepository {
  findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null>
  create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel>
}
