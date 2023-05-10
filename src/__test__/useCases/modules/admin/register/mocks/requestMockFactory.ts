import { AdminRegisterRequestDTO } from '@/core/dtos/admin'

type RequestMockType =
  | 'valid'
  | 'invalid-email'
  | 'exists-email'
  | 'invalid-password'
  | 'invalid-name'

const anyInfos = {
  name: 'Any Name',
  email: 'any@email.com',
  password: 'any_password',
}

export const requestMockFactory: Record<
  RequestMockType,
  AdminRegisterRequestDTO
> = {
  valid: {
    name: 'Valid Name',
    email: 'valid_email@provider.com',
    password: 'valid_password',
  },
  'invalid-email': {
    ...anyInfos,
    email: 'invalid_email',
  },
  'exists-email': {
    ...anyInfos,
    email: 'exists_email@provider.com',
  },
  'invalid-password': {
    ...anyInfos,
    email: 'valid_email@provider.com',
    password: '12345',
  },
  'invalid-name': {
    name: 'Jo',
    email: 'valid_email@provider.com',
    password: 'valid_password',
  },
}
