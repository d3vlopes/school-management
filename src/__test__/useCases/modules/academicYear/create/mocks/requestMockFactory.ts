import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'

type RequestMockType =
  | 'invalid-name'
  | 'invalid-year'
  | 'exists'
  | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  AcademicYearCreateRequestDTO
> = {
  'invalid-name': {
    name: '123',
    createdBy: 'user_id',
    year: 2023,
  },
  'invalid-year': {
    name: 'Any Name',
    createdBy: 'user_id',
    year: 1,
  },
  exists: {
    name: 'Exists_academic_year',
    createdBy: 'user_id',
    year: 2023,
  },
  valid: {
    name: 'Academic Year',
    createdBy: 'user_id',
    year: 2023,
  },
}
