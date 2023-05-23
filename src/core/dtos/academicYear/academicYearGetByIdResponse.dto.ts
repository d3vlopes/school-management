import { AcademicYearModel } from '@/core/models'

export type AcademicYearGetByIdResponseDTO = Omit<
  AcademicYearModel,
  'createdAt' | 'updatedAt'
>
