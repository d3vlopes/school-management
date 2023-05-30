import { AcademicTermModel } from '@/core/models'

export type AcademicTermCreateRequestDTO = Pick<
  AcademicTermModel,
  'name' | 'description' | 'duration' | 'createdBy'
>
