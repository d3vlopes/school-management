import { INVALID_EMAIL_ADDRESS_ERROR_MESSAGE } from '@/core/validations'

import { error } from '@/useCases/helpers'

export const invalidEmailError = () => {
  return error(INVALID_EMAIL_ADDRESS_ERROR_MESSAGE)
}
