import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'

export type IRequiredFields = keyof AcademicTermCreateRequestDTO

export const requiredFields: IRequiredFields[] = [
  'name',
  'description',
  'duration',
]
