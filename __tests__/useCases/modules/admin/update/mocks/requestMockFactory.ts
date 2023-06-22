import { AdminUpdateRequestDTO } from '@/core/dtos/admin'

type RequestMockType =
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'update-password'
  | 'update-name'
  | 'update-email'
  | 'exists-email'

export const requestMockFactory: Record<
  RequestMockType,
  AdminUpdateRequestDTO
> = {
  'invalid-email': {
    id: 'admin_id',
    email: 'invalid_email.com',
  },
  'invalid-password': {
    id: 'admin_id',
    password: '12345',
  },
  'invalid-name': {
    id: 'admin_id',
    name: 'Jo',
  },
  'update-password': {
    id: 'admin_id',
    password: 'password_updated',
  },
  'update-name': {
    id: 'admin_id',
    name: 'Updated Admin Name',
  },
  'update-email': {
    id: 'admin_id',
    email: 'update_email@provider.com',
  },
  'exists-email': {
    id: 'admin_id',
    email: 'invalid_email@provider.com',
  },
}
