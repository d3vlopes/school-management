import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

import { AdminModel } from '@/core/models'

import {
  INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/core/validations'

import { IUseCaseResponse } from '@/useCases/contracts/shared'

import { ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE } from '@/useCases/modules/admin/update/constants'

type ResponseMockType =
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'update-password'
  | 'update-name'
  | 'update-email'
  | 'exists-email'

export const responseMockFactory: Record<
  ResponseMockType,
  IUseCaseResponse<AdminModel>
> = {
  'invalid-email': {
    data: null,
    error: INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  },
  'invalid-password': {
    data: null,
    error: INVALID_PASSWORD_ERROR_MESSAGE,
  },
  'invalid-name': {
    data: null,
    error: INVALID_NAME_ERROR_MESSAGE,
  },
  'update-password': {
    data: {
      ...adminMock,
      password: 'password_encrypted',
    },
    error: null,
  },
  'update-name': {
    data: {
      ...adminMock,
      name: 'Updated Admin Name',
    },
    error: null,
  },
  'update-email': {
    data: {
      ...adminMock,
      email: 'update_email@provider.com',
    },
    error: null,
  },
  'exists-email': {
    data: null,
    error: ADMIN_UPDATE_EXISTS_EMAIL_ERROR_MESSAGE,
  },
}
