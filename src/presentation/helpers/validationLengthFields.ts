import { IValidator } from '@/useCases/contracts/adapters'

import { IValidationField } from '../contracts'

export function validationLengthFields(
  fields: IValidationField[],
  validator: IValidator,
) {
  for (const obj of fields) {
    const isValid = validator.isLength(obj.value, obj.min, obj.max)

    if (!isValid) {
      return obj.errorMessage
    }
  }
}
