import { IUseCaseResponse } from '../contracts/shared'

export function handleUseCaseReturn<T>(
  data?: T | null,
  error?: string | null,
): IUseCaseResponse<T> {
  return {
    data,
    error,
  }
}
