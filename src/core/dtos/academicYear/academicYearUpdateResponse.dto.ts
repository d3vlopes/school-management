import { AcademicYearModel } from '@/core/models'

export type AcademicYearUpdateResponseDTO = Omit<
  AcademicYearModel,
  'createdAt' | 'updatedAt'
>
