import { AcademicYearModel } from '@/core/models'

export type AcademicYearUpdateRequestDTO = Partial<
  Pick<AcademicYearModel, 'name' | 'year' | 'isCurrent' | 'createdBy'>
>
