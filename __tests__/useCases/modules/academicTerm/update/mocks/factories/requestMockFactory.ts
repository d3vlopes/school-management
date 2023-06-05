import { AcademicTermUpdateUseCaseData } from '../../academicTermUpdateUseCase'

type RequestMockType = 'invalid-id' | 'exists-name' | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  AcademicTermUpdateUseCaseData
> = {
  'invalid-id': {
    id: 'invalid_academic_term_id',
    name: 'valid_academic_term_name',
  },
  'exists-name': {
    id: 'academic_term_id',
    name: 'exists_academic_term_name',
  },
  valid: {
    id: 'academic_term_id',
    name: 'update_academic_term_name',
  },
}
