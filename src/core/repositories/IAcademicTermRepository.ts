import { AcademicTermModel } from '@/core/models'

import {
  AcademicTermCreateRequestDTO,
  AcademicTermUpdateRequestDTO,
} from '@/core/dtos/academicTerm'

export interface IAcademicTermRepository {
  findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null>
  create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel>
  findAll: () => Promise<AcademicTermModel[]>
  update(
    id: string,
    data: AcademicTermUpdateRequestDTO,
  ): Promise<AcademicTermModel | null>
  delete(id: string): Promise<void>
}
