import { vitest } from 'vitest'

import { IUseCase } from '@/useCases/contracts/shared'

export function useCaseSuccessMock<T, U>(
  stub: IUseCase<T, U>,
  data: unknown,
) {
  const spyOn = vitest
    .spyOn(stub, 'execute' as never)
    .mockResolvedValueOnce({
      data,
      error: null,
    })

  return spyOn
}
