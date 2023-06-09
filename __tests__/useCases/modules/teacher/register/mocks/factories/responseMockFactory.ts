import { TeacherModel } from '@/core/models'
import { IUseCaseResponse } from '@/useCases/contracts/shared'

type ResponseMockType =
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'email-already-register'
  | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IUseCaseResponse<TeacherModel>
> = {
  'invalid-email': {
    data: null,
    error: 'Invalid email address',
  },
  'invalid-password': {
    data: null,
    error: 'Password must be between 6 and 30 characters',
  },
  'invalid-name': {
    data: null,
    error: 'Name must be between 3 and 30 characters',
  },
  'email-already-register': {
    data: null,
    error: 'Email already registered',
  },
  success: {
    data: {
      id: '1235478',
      name: 'Teacher Mock',
      email: 'email@provider.com',
      password: 'password_encrypted',
      teacherId: 'generate_teacher_id',
      createdAt: new Date(23, 5),
      updatedAt: new Date(23, 5),
    },
    error: null,
  },
}
