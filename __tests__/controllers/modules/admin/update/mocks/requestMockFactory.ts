import { AdminUpdateRequestDTO } from '@/core/dtos/admin'

type RequestMockType =
  | 'invalid-email'
  | 'exists-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'valid'

type IRequest = Omit<AdminUpdateRequestDTO, 'id'> & {
  user: { id: string }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'invalid-email': {
    user: {
      id: 'admin_id',
    },
    email: 'invalid_email.com',
  },
  'exists-email': {
    user: {
      id: 'admin_id',
    },
    email: 'exists_email@provider.com',
  },
  'invalid-password': {
    user: {
      id: 'admin_id',
    },
    password: '12345',
  },
  'invalid-name': {
    user: {
      id: 'admin_id',
    },
    name: 'invalid_name',
  },
  valid: {
    user: {
      id: 'admin_id',
    },
    name: 'Update admin name',
  },
}
