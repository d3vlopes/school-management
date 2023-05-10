import { IValidationField } from '@/presentation/contracts'

import {
  ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
  ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
} from '../constants'

export interface ILengthValidationFieldsParams {
  fields: {
    name: string
    password: string
  }
}

export function lengthValidationFields({
  fields,
}: ILengthValidationFieldsParams): IValidationField[] {
  return [
    {
      value: fields.password,
      min: 6,
      max: 30,
      errorMessage: ADMIN_REGISTER_INVALID_PASSWORD_ERROR_MESSAGE,
    },
    {
      value: fields.name,
      min: 3,
      max: 30,
      errorMessage: ADMIN_REGISTER_INVALID_NAME_ERROR_MESSAGE,
    },
  ]
}
