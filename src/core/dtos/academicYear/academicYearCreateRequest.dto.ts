import { AcademicYearModel } from '@/core/models'

export type AcademicYearCreateRequestDTO = Pick<
  AcademicYearModel,
  'name' | 'year'
> & { id?: string; createdBy?: string }
