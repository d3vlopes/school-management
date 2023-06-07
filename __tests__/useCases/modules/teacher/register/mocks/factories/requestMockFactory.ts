import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'

type RequestMockType =
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'email-already-register'
  | 'valid-password'
  | 'invalid-password'
  | 'valid-data'

export const requestMockFactory: Record<
  RequestMockType,
  TeacherRegisterRequestDTO
> = {
  'invalid-email': {
    name: 'any_name',
    password: 'any_password',
    email: 'invalid_email',
  },
  'invalid-password': {
    name: 'any_name',
    password: '12345',
    email: 'any_email',
  },
  'invalid-name': {
    name: 'Jo',
    password: 'any_password',
    email: 'any_email',
  },
  'email-already-register': {
    name: 'any_name',
    password: 'any_password',
    email: 'exists_email@provider.com',
  },
  'valid-password': {
    name: 'any_name',
    password: 'valid_password',
    email: 'any_email@provider.com',
  },
  'valid-data': {
    name: 'valid_name',
    password: 'valid_password',
    email: 'valid_email@provider.com',
  },
}
