import { AdminRegisterRequestDTO } from '@/core/dtos/admin'

import { MissingParamError } from '@/presentation/errors'

type RequiredFields = keyof AdminRegisterRequestDTO

const requiredFields: RequiredFields[] = ['name', 'email', 'password']

export function validationRequiredFields(
  request: AdminRegisterRequestDTO,
) {
  for (const field of requiredFields) {
    if (!request[field]) {
      return new MissingParamError(field)
    }
  }
}
