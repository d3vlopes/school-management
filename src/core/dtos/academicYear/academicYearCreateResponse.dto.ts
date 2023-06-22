import { AcademicYearModel } from '@/core/models'

export type AcademicYearCreateResponseDTO = Omit<
  AcademicYearModel,
  'createdAt' | 'updatedAt'
>
