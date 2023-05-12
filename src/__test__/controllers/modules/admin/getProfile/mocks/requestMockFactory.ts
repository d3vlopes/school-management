import { AdminGetProfileRequestDTO } from '@/core/dtos/admin'

import { createAdminMockFactory as adminMock } from '@/__test__/mocks'

type RequestMockType = 'valid' | 'invalid-id'

export const requestMockFactory: Record<
  RequestMockType,
  AdminGetProfileRequestDTO
> = {
  valid: {
    user: {
      id: adminMock.id,
    },
  },
  'invalid-id': {
    user: {
      id: 'invalid-id',
    },
  },
}
