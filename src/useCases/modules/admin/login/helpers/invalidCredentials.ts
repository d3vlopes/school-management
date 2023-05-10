import { handleUseCaseReturn } from '@/useCases/helpers'

import { INVALID_CREDENTIALS_ERROR_MESSAGE } from '../constants'

export function invalidCredentials() {
  return handleUseCaseReturn(null, INVALID_CREDENTIALS_ERROR_MESSAGE)
}
