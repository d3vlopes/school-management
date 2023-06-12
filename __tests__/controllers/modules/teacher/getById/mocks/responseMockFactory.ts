import { IHttpResponse } from '@/presentation/contracts'
import { ServerError } from '@/presentation/errors'

type ResponseMockType = 'not-found' | 'server-error' | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'not-found': {
    statusCode: 404,
    body: new Error('Teacher not found'),
  },
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  success: {
    statusCode: 200,
    body: {
      id: '1235478',
      name: 'Teacher Mock',
      email: 'email@provider.com',
      teacherId: 'generate_teacher_id',
      dateEmployed: new Date(23, 5),
      isWithdrawn: false,
      isSuspended: false,
      role: 'teacher',
      applicationStatus: 'pending',
      createdBy: 'admin_id',
      createdAt: new Date(23, 5),
    },
  },
}
