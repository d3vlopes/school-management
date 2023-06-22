import { handleUseCaseReturn } from '@/useCases/helpers'

import { ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE } from '../constants'

export const existsEmailError = () => {
  return handleUseCaseReturn(
    null,
    ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE,
  )
}
