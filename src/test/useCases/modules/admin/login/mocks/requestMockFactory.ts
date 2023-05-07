import { AdminLoginRequestDTO } from '@/core/dtos/admin'

type RequestMockType = 'valid' | 'invalid-email' | 'invalid-password'

export const requestMockFactory: Record<
  RequestMockType,
  AdminLoginRequestDTO
> = {
  valid: {
    email: 'valid_email@provider.com',
    password: 'password_encrypted',
  },
  'invalid-email': {
    email: 'invalid_email@provider.com',
    password: 'password_encrypted',
  },
  'invalid-password': {
    email: 'invalid_email@provider.com',
    password: 'invalid_password',
  },
}
