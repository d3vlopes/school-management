import { handleUseCaseReturn } from '@/useCases/helpers'

import {
  ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
} from '../constants'
import { AdminModel } from '@/core/models'

export const returnExistsEmailError = () => {
  return handleUseCaseReturn(
    null,
    ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
  )
}

export const returnInvalidEmailError = () => {
  return handleUseCaseReturn(
    null,
    ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  )
}

export const returnLengthValidationError = (error: string) => {
  return handleUseCaseReturn(null, error)
}

export const returnSuccess = (user: AdminModel) => {
  return handleUseCaseReturn<AdminModel>(user, null)
}
