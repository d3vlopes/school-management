import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'

type RequestMockType =
  | 'missing-name'
  | 'missing-createdBy'
  | 'missing-year'
  | 'invalid-name'
  | 'invalid-year'
  | 'already-exists'
  | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  Partial<AcademicYearCreateRequestDTO>
> = {
  'missing-name': {
    createdBy: 'user_id',
    year: 2023,
  },
  'missing-createdBy': {
    name: 'Any Name',
    year: 2023,
  },
  'missing-year': {
    name: 'Any Name',
    createdBy: 'user_id',
  },
  'invalid-name': {
    name: 'invalid_name',
    createdBy: 'user_id',
    year: 2023,
  },
  'invalid-year': {
    name: 'valid_name',
    createdBy: 'user_id',
    year: 1010,
  },
  'already-exists': {
    name: 'exists_academic_year',
    createdBy: 'user_id',
    year: 2023,
  },
  valid: {
    name: 'valid_name',
    createdBy: 'user_id',
    year: 2023,
  },
}
