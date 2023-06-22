import { vitest } from 'vitest'

import { validatorStub } from '@/__tests__/stubs'

export const invalidNameMock = () => {
  const spyOn = vitest
    .spyOn(validatorStub, 'isLength')
    // password validator
    .mockReturnValueOnce(true)
    // name validator
    .mockReturnValueOnce(false)

  return spyOn
}
