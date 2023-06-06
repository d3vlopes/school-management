type RequestMockType = 'invalid-id' | 'invalid-user-id' | 'valid'

interface IRequest {
  params: {
    id: string
  }
  user: {
    id: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-id': {
    params: {
      id: 'invalid_id',
    },
    user: {
      id: 'user_id',
    },
  },
  'invalid-user-id': {
    params: {
      id: 'valid_id',
    },
    user: {
      id: 'invalid_user_id',
    },
  },
  valid: {
    params: {
      id: 'valid_id',
    },
    user: {
      id: 'valid_user_id',
    },
  },
}
