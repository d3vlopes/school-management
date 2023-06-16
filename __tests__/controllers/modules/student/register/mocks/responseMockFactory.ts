import { IHttpResponse } from '@/presentation/contracts'
import { MissingParamError, ServerError } from '@/presentation/errors'

type ResponseMockType =
  | 'missing-name'
  | 'missing-email'
  | 'missing-password'
  | 'email-already-register'
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'server-error'
  | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'missing-name': {
    statusCode: 400,
    body: new MissingParamError('name'),
  },
  'missing-email': {
    statusCode: 400,
    body: new MissingParamError('email'),
  },
  'missing-password': {
    statusCode: 400,
    body: new MissingParamError('password'),
  },
  'email-already-register': {
    statusCode: 400,
    body: new Error('Email already registered'),
  },
  'invalid-email': {
    statusCode: 400,
    body: new Error('Invalid email address'),
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
    statusCode: 201,
    body: {
      id: '1235478',
      name: 'Student Mock',
      email: 'email@provider.com',
      studentId: 'generate_student_id',
      dateAdmitted: new Date(23, 5),
      isWithdrawn: false,
      isSuspended: false,
      isGraduated: false,
      role: 'student',
      createdAt: new Date(23, 5),
    },
  },
}
