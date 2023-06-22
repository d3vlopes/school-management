import { vitest } from 'vitest'

import { IUseCase } from '@/useCases/contracts/shared'

export function useCaseErrorMock<T, U>(
  stub: IUseCase<T, U>,
  error: string,
) {
  const spyOn = vitest.spyOn(stub, 'execute').mockResolvedValueOnce({
    data: null,
    error,
  })

  return spyOn
}
