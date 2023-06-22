type RequestMockType = 'invalid-teacher' | 'valid-teacher'

interface IRequest {
  params: {
    id: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-teacher': {
    params: {
      id: 'invalid_teacher_id',
    },
  },
  'valid-teacher': {
    params: {
      id: 'valid_teacher_id',
    },
  },
}
