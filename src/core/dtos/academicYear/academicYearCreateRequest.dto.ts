import { AcademicYearModel } from '@/core/models'

export type AcademicYearCreateRequestDTO = Pick<
  AcademicYearModel,
  'name' | 'createdBy' | 'year'
> & { id?: string }
