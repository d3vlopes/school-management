import { vitest } from 'vitest'

import { IValidator } from '@/useCases/contracts/adapters'

export const invalidLengthMock = (stub: IValidator) => {
  const spyOn = vitest
    .spyOn(stub, 'isLength')
    .mockReturnValueOnce(false)

  return spyOn
}
