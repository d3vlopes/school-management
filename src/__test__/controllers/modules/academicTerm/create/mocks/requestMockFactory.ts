import { IAcademicTermCreateController } from '@/presentation/controllers/modules/academicTerm/create/interfaces'

type RequestMockType =
  | 'missing-name'
  | 'exists-name'
  | 'missing-description'
  | 'missing-duration'
  | 'invalid-user'
  | 'valid'

const anyValues: Omit<IAcademicTermCreateController, 'user'> = {
  name: 'any_name',
  description: 'any_description',
  duration: 'any_duration',
}

export const requestMockFactory: Record<
  RequestMockType,
  Partial<IAcademicTermCreateController>
> = {
  'missing-name': {
    user: {
      id: 'user_id',
    },
    description: 'any_description',
    duration: 'any_duration',
  },
  'exists-name': {
    user: {
      id: 'user_id',
    },
    ...anyValues,
    name: 'exists_name',
  },
  'missing-description': {
    user: {
      id: 'user_id',
    },
    name: 'any_name',
    duration: 'any_duration',
  },
  'missing-duration': {
    user: {
      id: 'user_id',
    },
    name: 'any_name',
    description: 'any_description',
  },
  'invalid-user': {
    user: {
      id: 'invalid_user',
    },
    ...anyValues,
  },
  valid: {
    user: {
      id: 'user_id',
    },
    ...anyValues,
    name: 'valid_name',
  },
}
