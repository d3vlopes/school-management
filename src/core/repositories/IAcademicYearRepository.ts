import { AcademicYearModel } from '@/core/models'
import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'

export interface IAcademicYearRepository {
  findOne: (
    data: Partial<AcademicYearModel>,
  ) => Promise<AcademicYearModel | null>
  create(
    data: AcademicYearCreateRequestDTO,
  ): Promise<AcademicYearModel>
}
