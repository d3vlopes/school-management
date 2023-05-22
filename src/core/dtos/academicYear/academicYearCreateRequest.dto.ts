import { AcademicYearModel } from '@/core/models'

export type AcademicYearCreateDTO = Pick<
  AcademicYearModel,
  'name' | 'createdBy' | 'year'
>
