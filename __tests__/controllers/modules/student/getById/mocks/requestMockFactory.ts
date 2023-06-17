type RequestMockType = 'invalid-student' | 'valid-data'

interface IRequest {
  params: {
    id: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-student': {
    params: {
      id: 'invalid_student_id',
    },
  },
  'valid-data': {
    params: {
      id: 'valid_student_id',
    },
  },
}
