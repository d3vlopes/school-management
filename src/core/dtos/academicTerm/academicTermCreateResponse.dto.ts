import { AcademicTermModel } from '@/core/models'

export type AcademicTermCreateResponseDTO = Omit<
  AcademicTermModel,
  'createdAt' | 'updatedAt'
>
