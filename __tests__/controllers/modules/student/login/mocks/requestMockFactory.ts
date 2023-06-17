import { StudentLoginRequestDTO } from '@/core/dtos/student'

type RequestMockType =
  | 'missing-email'
  | 'missing-password'
  | 'invalid-credentials'
  | 'valid-data'

export const requestMockFactory: Record<
  RequestMockType,
  Partial<StudentLoginRequestDTO>
> = {
  'missing-email': {
    password: 'any_password',
  },
  'missing-password': {
    email: 'any_email@provider.com',
  },
  'invalid-credentials': {
    email: 'invalid_email@provider.com',
    password: 'invalid_password',
  },
  'valid-data': {
    email: 'valid_email@provider.com',
    password: 'valid_password',
  },
}
