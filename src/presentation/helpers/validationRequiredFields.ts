import { MissingParamError } from '@/presentation/errors'

export function validationRequiredFields<T extends string>(
  request: Record<string, unknown>,
  requiredFields: T[],
) {
  for (const field of requiredFields) {
    if (!request[field]) {
      return new MissingParamError(field)
    }
  }
}
