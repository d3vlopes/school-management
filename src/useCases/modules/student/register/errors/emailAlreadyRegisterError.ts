import { error } from '@/useCases/helpers'

export const emailAlreadyRegisterError = () => {
  return error('Email already registered')
}
