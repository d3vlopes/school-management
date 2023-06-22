import { error } from '@/useCases/helpers'

export const invalidCredentialsError = () => {
  return error('Invalid login credentials')
}
