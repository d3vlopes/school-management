import { AcademicTermModel } from '@/core/models'

export type AcademicTermGetByIdResponseDTO = Omit<
  AcademicTermModel,
  'updatedAt'
>
