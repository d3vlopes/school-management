import { AdminGetProfileRequestDTO } from '@/core/dtos/admin'

import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

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
