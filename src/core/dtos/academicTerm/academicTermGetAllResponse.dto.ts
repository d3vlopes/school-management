import { AcademicTermModel } from '@/core/models'

export type AcademicTermGetAllResponseDTO = Omit<
  AcademicTermModel,
  'updatedAt'
>
