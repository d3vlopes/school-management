type RequestMockType = 'missing-id' | 'invalid-id' | 'valid'

interface IRequest {
  params: {
    id?: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'missing-id': {
    params: {},
  },
  'invalid-id': {
    params: {
      id: 'invalid_id',
    },
  },
  valid: {
    params: {
      id: 'valid_id',
    },
  },
}
