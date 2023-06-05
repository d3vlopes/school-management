import { AcademicYearCreateUseCaseData } from '@/useCases/modules/academicYear'

type RequestMockType =
  | 'invalid-name'
  | 'invalid-year'
  | 'exists'
  | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  AcademicYearCreateUseCaseData
> = {
  'invalid-name': {
    name: '123',
    userId: 'user_id',
    year: 2023,
  },
  'invalid-year': {
    name: 'Any Name',
    userId: 'user_id',
    year: 1,
  },
  exists: {
    name: 'Exists_academic_year',
    userId: 'user_id',
    year: 2023,
  },
  valid: {
    name: 'Academic Year',
    userId: 'user_id',
    year: 2023,
  },
}
