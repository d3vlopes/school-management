import { handleUseCaseReturn } from './handleUseCaseReturn'

export const error = (error: string) => {
  return handleUseCaseReturn(null, error)
}

export const success = <T>(data: T) => {
  return handleUseCaseReturn<T>(data, null)
}
