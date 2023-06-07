import {
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
} from '@/core/validations'
import { IValidationField } from '@/presentation/contracts'

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
      errorMessage: INVALID_PASSWORD_ERROR_MESSAGE,
    },
    {
      value: fields.name,
      min: 3,
      max: 30,
      errorMessage: INVALID_NAME_ERROR_MESSAGE,
    },
  ]
}
