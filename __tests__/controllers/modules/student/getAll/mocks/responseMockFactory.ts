import { IHttpResponse } from '@/presentation/contracts'
import { ServerError } from '@/presentation/errors'

type ResponseMockType = 'server-error' | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  success: {
    statusCode: 200,
    body: [
      {
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
      {
        id: '98564787',
        name: 'Student Mock 2',
        email: 'email@provider.com',
        studentId: 'generate_student_id',
        dateAdmitted: new Date(13, 6),
        isWithdrawn: false,
        isSuspended: false,
        isGraduated: false,
        role: 'student',
        createdAt: new Date(13, 6),
      },
    ],
  },
}
