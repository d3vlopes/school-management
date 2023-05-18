import { vitest } from 'vitest'

import { IValidator } from '@/useCases/contracts/adapters'

export const invalidEmailMock = (stub: IValidator) => {
  const spyOn = vitest
    .spyOn(stub, 'isEmail')
    .mockReturnValueOnce(false)

  return spyOn
}
