import { IUseCaseResponse } from '../contracts/shared'

export function handleUseCaseReturn<T = null>(
  data: T | null,
  error: string | null,
): IUseCaseResponse<T> {
  return {
    data,
    error,
  }
}
