import { AdminModel } from '@/core/models'
import { IUseCaseResponse } from '@/useCases/contracts/shared'
import {
  ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/useCases/modules/admin/register/constants'

type ReturnMockType =
  | 'success'
  | 'invalid-email'
  | 'invalid-password'
  | 'invalid-name'
  | 'exists-email'

export const returnMockFactory: Record<
  ReturnMockType,
  IUseCaseResponse<AdminModel>
> = {
  success: {
    data: {
      id: '1234',
      name: 'User Name',
      email: 'user@email.com',
      role: 'admin',
      password: 'password_encrypted',
      academicTerms: [],
      academicYears: [],
      classLevels: [],
      programs: [],
      students: [],
      teachers: [],
      yearGroups: [],
      createdAt: new Date(23, 5),
      updatedAt: new Date(23, 5),
    },
    error: null,
  },
  'invalid-email': {
    data: null,
    error: ADMIN_REGISTER_INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
  },
  'invalid-password': {
    data: null,
    error: ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
  },
  'invalid-name': {
    data: null,
    error: ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
  },
  'exists-email': {
    data: null,
    error: ADMIN_REGISTER_EXISTS_EMAIL_ERROR_MESSAGE,
  },
}
