import { teacherMock } from '@/__tests__/mocks/modules'

import { TeacherModel } from '@/core/models'

import { IUseCaseResponse } from '@/useCases/contracts/shared'

type ResponseMockType =
  | 'invalid-email'
  | 'email-already-register'
  | 'invalid-name'
  | 'invalid-password'
  | 'update-password'
  | 'update-name'
  | 'update-email'

export const responseMockFactory: Record<
  ResponseMockType,
  IUseCaseResponse<TeacherModel>
> = {
  'invalid-email': {
    data: null,
    error: 'Invalid email address',
  },
  'email-already-register': {
    data: null,
    error: 'Email already registered',
  },
  'invalid-name': {
    data: null,
    error: 'Name must be between 3 and 30 characters',
  },
  'invalid-password': {
    data: null,
    error: 'Password must be between 6 and 30 characters',
  },
  'update-password': {
    data: {
      ...teacherMock,
      password: 'update_encrypted_password',
    },
    error: null,
  },
  'update-name': {
    data: {
      ...teacherMock,
      name: 'update_name',
    },
    error: null,
  },
  'update-email': {
    data: {
      ...teacherMock,
      email: 'update_email@provider.com',
    },
    error: null,
  },
}
