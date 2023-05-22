import { AcademicYearModel } from '@/core/models'
import { AcademicYearCreateDTO } from '@/core/dtos/academicYear'

export interface IAcademicYearRepository {
  findOne: (
    data: Partial<AcademicYearModel>,
  ) => Promise<AcademicYearModel | null>
  create(data: AcademicYearCreateDTO): Promise<AcademicYearModel>
}
