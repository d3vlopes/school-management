import { IUseCaseResponse } from '@/useCases/contracts/shared'

import { INVALID_CREDENTIALS_ERROR_MESSAGE } from '@/useCases/modules/admin/login/constants'

type ReturnErrorMockType = 'invalid-credentials'

export const returnErrorMockFactory: Record<
  ReturnErrorMockType,
  IUseCaseResponse<null>
> = {
  'invalid-credentials': {
    data: null,
    error: INVALID_CREDENTIALS_ERROR_MESSAGE,
  },
}
