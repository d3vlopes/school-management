import { vitest } from 'vitest'

import { encrypterStub } from '@/__tests__/stubs'

export const invalidPasswordMock = () => {
  const spyOn = vitest
    .spyOn(encrypterStub, 'compare')
    .mockResolvedValueOnce(false)

  return spyOn
}
