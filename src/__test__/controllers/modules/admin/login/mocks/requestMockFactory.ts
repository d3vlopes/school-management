import { AdminLoginRequestDTO } from '@/core/dtos/admin'

type RequestMockFactoryType =
  | 'missing-email'
  | 'missing-password'
  | 'invalid-email'
  | 'invalid-password'
  | 'valid-credentials'

export const requestMockFactory: Record<
  RequestMockFactoryType,
  Partial<AdminLoginRequestDTO>
> = {
  'missing-email': {
    password: 'password_encrypted',
  },
  'missing-password': {
    email: 'admin@email.com',
  },
  'invalid-email': {
    email: 'invalid_email@provider.com',
    password: 'any_password',
  },
  'invalid-password': {
    email: 'any_email@provider.com',
    password: 'invalid_password',
  },
  'valid-credentials': {
    email: 'valid_email@provider.com',
    password: 'valid_password',
  },
}
