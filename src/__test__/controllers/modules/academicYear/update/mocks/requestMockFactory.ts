import { IAcademicYearUpdateControllerRequest } from '@/presentation/controllers/modules/academicYear'

type IRequest = Omit<
  IAcademicYearUpdateControllerRequest,
  'params'
> & { params: { id?: string } }

type RequestMockType =
  | 'invalid-name'
  | 'exists-name'
  | 'invalid-year'
  | 'valid'

const commonProps = {
  params: {
    id: 'academic_year_id',
  },
  user: {
    id: 'user_id',
  },
}

export const requestMockFactory: Record<
  RequestMockType,
  Partial<IRequest>
> = {
  'invalid-name': {
    ...commonProps,
    name: 'invalid_name',
  },
  'exists-name': {
    ...commonProps,
    name: 'exists_name',
  },
  'invalid-year': {
    ...commonProps,
    year: 1010,
  },
  valid: {
    ...commonProps,
    name: 'valid_name',
    isCurrent: true,
  },
}
