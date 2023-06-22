import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'

type RequestMockType =
  | 'missing-name'
  | 'missing-email'
  | 'missing-password'
  | 'email-already-register'
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'valid-data'

const anyValues: Partial<TeacherRegisterRequestDTO> = {
  name: 'any_name',
  password: 'any_password',
  email: 'any_email@example.com',
}

export const requestMockFactory: Record<
  RequestMockType,
  Partial<TeacherRegisterRequestDTO>
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
    name: 'Teacher Mock',
    email: 'email@provider.com',
    password: 'valid_password',
  },
}
