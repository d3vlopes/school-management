import { AcademicYearUpdateUseCaseData } from '@/useCases/modules/academicYear'

type RequestMockType =
  | 'invalid-name'
  | 'invalid-year'
  | 'exists-name'
  | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  AcademicYearUpdateUseCaseData
> = {
  'invalid-name': {
    id: 'academic_year_id',
    userId: 'user_id',
    name: 'invalid_name',
  },
  'invalid-year': {
    id: 'academic_year_id',
    userId: 'user_id',
    year: 1010,
  },
  'exists-name': {
    id: 'academic_year_id',
    userId: 'user_id',
    name: 'exist_name',
  },
  valid: {
    id: 'academic_year_id',
    userId: 'user_id',
    name: 'valid_name',
    year: 2023,
  },
}
