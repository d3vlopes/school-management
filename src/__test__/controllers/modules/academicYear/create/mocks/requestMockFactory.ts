import { IAcademicYearCreateController } from '@/presentation/controllers/modules/academicYear'

type RequestMockPropsType = Partial<IAcademicYearCreateController>

type RequestMockType =
  | 'missing-name'
  | 'missing-createdBy'
  | 'missing-year'
  | 'invalid-name'
  | 'invalid-year'
  | 'already-exists'
  | 'valid'

const commonProps: Pick<RequestMockPropsType, 'user'> = {
  user: {
    id: 'user_id',
  },
}

export const requestMockFactory: Record<
  RequestMockType,
  RequestMockPropsType
> = {
  'missing-name': {
    ...commonProps,
    year: 2023,
  },
  'missing-createdBy': {
    ...commonProps,
    name: 'Any Name',
    year: 2023,
  },
  'missing-year': {
    ...commonProps,
    name: 'Any Name',
  },
  'invalid-name': {
    ...commonProps,
    name: 'invalid_name',
    year: 2023,
  },
  'invalid-year': {
    ...commonProps,
    name: 'valid_name',
    year: 1010,
  },
  'already-exists': {
    ...commonProps,
    name: 'exists_academic_year',
    year: 2023,
  },
  valid: {
    ...commonProps,
    name: 'valid_name',
    year: 2023,
  },
}
