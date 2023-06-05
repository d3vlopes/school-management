import { IAcademicTermUpdateControllerRequest } from '@/presentation/controllers/modules/academicTerm'

type RequestMockType = 'exists-name' | 'invalid-id' | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  IAcademicTermUpdateControllerRequest
> = {
  'exists-name': {
    params: {
      id: 'academic_term_id',
    },
    name: 'exists_academic_term_name',
  },
  'invalid-id': {
    params: {
      id: 'invalid_academic_term_id',
    },
    name: 'any_name',
  },
  valid: {
    params: {
      id: 'academic_term_id',
    },
    name: 'valid_academic_term_name',
  },
}
