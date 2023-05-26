import { AcademicYearModel } from '@/core/models'
import {
  AcademicYearCreateRequestDTO,
  AcademicYearUpdateRequestDTO,
} from '@/core/dtos/academicYear'

export interface IAcademicYearRepository {
  findOne: (
    data: Partial<AcademicYearModel>,
  ) => Promise<AcademicYearModel | null>
  create(
    data: AcademicYearCreateRequestDTO,
  ): Promise<AcademicYearModel>
  findAll(): Promise<AcademicYearModel[]>
  update(
    id: string,
    data: AcademicYearUpdateRequestDTO,
  ): Promise<AcademicYearModel | null>
  delete(id: string): Promise<void>
}
