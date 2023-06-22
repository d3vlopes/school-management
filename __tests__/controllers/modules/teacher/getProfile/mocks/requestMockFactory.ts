type RequestMockType = 'invalid-teacher' | 'valid-teacher'

interface IRequest {
  user: {
    id: string
    role?: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-teacher': {
    user: {
      id: 'invalid_teacher_id',
    },
  },
  'valid-teacher': {
    user: {
      id: 'valid_teacher_id',
    },
  },
}
