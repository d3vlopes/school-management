import { vitest } from 'vitest'

import { IValidator } from '@/useCases/contracts/adapters'

export const invalidNumberMock = (stub: IValidator) => {
  const spyOn = vitest
    .spyOn(stub, 'isNumber')
    .mockReturnValueOnce(false)

  return spyOn
}
