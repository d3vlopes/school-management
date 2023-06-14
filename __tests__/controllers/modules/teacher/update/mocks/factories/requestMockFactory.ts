import { TeacherUpdateRequestDTO } from '@/core/dtos/teacher'

type RequestMockType =
  | 'invalid-email'
  | 'email-already-registered'
  | 'invalid-password'
  | 'invalid-name'
  | 'invalid-teacher-id'
  | 'valid-data'

interface IRequest extends Omit<TeacherUpdateRequestDTO, 'id'> {
  user: { id: string }
}

const commonProps: Pick<IRequest, 'user'> = {
  user: {
    id: 'teacher_id',
  },
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-email': {
    ...commonProps,
    email: 'invalid_email.com',
  },
  'email-already-registered': {
    ...commonProps,
    email: 'email_already_registered@provider.com',
  },
  'invalid-password': {
    ...commonProps,
    password: 'invalid_password',
  },
  'invalid-name': {
    ...commonProps,
    name: 'invalid_name',
  },
  'invalid-teacher-id': {
    user: {
      id: 'invalid_teacher_id',
    },
    name: 'update_name',
    email: 'update_email@provider.com',
    password: 'new_password',
  },
  'valid-data': {
    ...commonProps,
    name: 'update_name',
    email: 'update_email@provider.com',
    password: 'new_password',
  },
}
