import {
  INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/core/validations'

import { handleUseCaseReturn } from './handleUseCaseReturn'

export const invalidEmailError = () => {
  return handleUseCaseReturn(
    null,
    INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  )
}

export const invalidPasswordError = () => {
  return handleUseCaseReturn(null, INVALID_PASSWORD_ERROR_MESSAGE)
}

export const invalidNameError = (error?: string) => {
  return handleUseCaseReturn(
    null,
    error ?? INVALID_NAME_ERROR_MESSAGE,
  )
}

export const notFoundError = (error: string) => {
  return handleUseCaseReturn(null, error)
}

export const success = <T>(data: T) => {
  return handleUseCaseReturn<T>(data, null)
}
