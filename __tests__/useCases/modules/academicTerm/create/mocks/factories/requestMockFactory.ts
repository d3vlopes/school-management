import { AcademicTermCreateUseCaseData } from '@/useCases/modules/academicTerm'

type RequestMockType = 'exists-name' | 'valid'

export const requestMockFactory: Record<
  RequestMockType,
  AcademicTermCreateUseCaseData
> = {
  'exists-name': {
    userId: 'user_id',
    name: 'exists_name',
    description: 'any_description',
    duration: '3 mês',
  },
  valid: {
    userId: 'user_id',
    name: 'valid_name',
    description: 'any_description',
    duration: '3 mês',
  },
}
