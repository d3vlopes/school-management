import { AcademicTermModel } from '@/core/models'

export type AcademicTermUpdateResponseDTO = Omit<
  AcademicTermModel,
  'updatedAt'
>
