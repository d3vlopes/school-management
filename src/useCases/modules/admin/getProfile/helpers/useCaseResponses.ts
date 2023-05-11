import { AdminModel } from '@/core/models'

import { handleUseCaseReturn } from '@/useCases/helpers'

import { ADMIN_GET_PROFILE_NOT_FOUND_MESSAGE_ERROR } from '../constants'

export const adminNotFoundError = () => {
  return handleUseCaseReturn(
    null,
    ADMIN_GET_PROFILE_NOT_FOUND_MESSAGE_ERROR,
  )
}

export const success = (user: AdminModel) => {
  return handleUseCaseReturn(user, null)
}
