import { AcademicYearModel } from '@/core/models'

export type AcademicYearGetAllResponseDTO = Omit<
  AcademicYearModel,
  'createdAt' | 'updatedAt'
>
