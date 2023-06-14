import { IHttpResponse } from '@/presentation/contracts'
import { ServerError } from '@/presentation/errors'

type ResponseMockType =
  | 'invalid-email'
  | 'email-already-registered'
  | 'invalid-password'
  | 'invalid-name'
  | 'server-error'
  | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'invalid-email': {
    statusCode: 400,
    body: new Error('Invalid email address'),
  },
  'email-already-registered': {
    statusCode: 400,
    body: new Error('Email already registered'),
  },
  'invalid-password': {
    statusCode: 400,
    body: new Error('Password must be between 6 and 30 characters'),
  },
  'invalid-name': {
    statusCode: 400,
    body: new Error('Name must be between 3 and 30 characters'),
  },
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  success: {
    statusCode: 200,
    body: {
      id: '1235478',
      name: 'update_name',
      email: 'update_email@provider.com',
      teacherId: 'generate_teacher_id',
      dateEmployed: new Date(23, 5),
      isWithdrawn: false,
      isSuspended: false,
      role: 'teacher',
      applicationStatus: 'pending',
      createdBy: 'admin_id',
      createdAt: new Date(23, 5),
      updatedAt: new Date(23, 5),
    },
  },
}
