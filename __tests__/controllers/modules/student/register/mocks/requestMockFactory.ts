import { StudentRegisterRequestDTO } from '@/core/dtos/student'

type RequestMockType =
  | 'missing-name'
  | 'missing-email'
  | 'missing-password'
  | 'email-already-register'
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'valid-data'

const anyValues: Partial<StudentRegisterRequestDTO> = {
  name: 'any_name',
  password: 'any_password',
  email: 'any_email@example.com',
}

export const requestMockFactory: Record<
  RequestMockType,
  Partial<StudentRegisterRequestDTO>
> = {
  'missing-name': {
    ...anyValues,
    name: undefined,
  },
  'missing-email': {
    ...anyValues,
    email: undefined,
  },
  'missing-password': {
    ...anyValues,
    password: undefined,
  },
  'email-already-register': {
    ...anyValues,
    email: 'already_register_email@example.com',
  },
  'invalid-email': {
    ...anyValues,
    email: 'invalid_email@example.com',
  },
  'invalid-password': {
    ...anyValues,
    password: '12345',
  },
  'invalid-name': {
    ...anyValues,
    name: 'Jo',
  },
  'valid-data': {
    name: 'Student Mock',
    email: 'email@provider.com',
    password: 'valid_password',
  },
}
