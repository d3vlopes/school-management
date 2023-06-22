import { vitest } from 'vitest'

import { validatorStub } from '@/__tests__/stubs'

export const invalidEmailMock = () => {
  const spyOn = vitest
    .spyOn(validatorStub, 'isEmail')
    .mockReturnValueOnce(false)

  return spyOn
}
