import { vitest } from 'vitest'

import { encrypterStub } from '@/__tests__/stubs'

export const encrypterMock = (newValue?: string) => {
  const spyOn = vitest
    .spyOn(encrypterStub, 'encrypt')
    .mockResolvedValueOnce(newValue ?? 'password_encrypted')

  return spyOn
}
