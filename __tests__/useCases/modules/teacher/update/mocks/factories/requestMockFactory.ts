import { TeacherUpdateRequestDTO } from '@/core/dtos/teacher'

type RequestMockType =
  | 'invalid-teacher-id'
  | 'invalid-email'
  | 'email-already-register'
  | 'invalid-name'
  | 'invalid-password'
  | 'valid-password'
  | 'valid-name'
  | 'valid-email'

const commonProps: Pick<TeacherUpdateRequestDTO, 'id'> = {
  id: 'teacher_id',
}

export const requestMockFactory: Record<
  RequestMockType,
  TeacherUpdateRequestDTO
> = {
  'invalid-teacher-id': {
    id: 'invalid_teacher_id',
  },
  'invalid-email': {
    ...commonProps,
    email: 'invalid_email.com',
  },
  'email-already-register': {
    ...commonProps,
    email: 'exists_email@provider.com',
  },
  'invalid-name': {
    ...commonProps,
    name: '12',
  },
  'invalid-password': {
    ...commonProps,
    password: '12345',
  },
  'valid-password': {
    ...commonProps,
    password: '123456',
  },
  'valid-name': {
    ...commonProps,
    name: 'update_name',
  },
  'valid-email': {
    ...commonProps,
    email: 'update_email@provider.com',
  },
}
