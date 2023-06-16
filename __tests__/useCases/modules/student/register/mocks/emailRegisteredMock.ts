import { vitest } from 'vitest'

import { studentRepositoryStub } from '@/__tests__/stubs'
import { studentMock } from '@/__tests__/mocks/modules'

export const emailRegisteredMock = () => {
  const spyOn = vitest
    .spyOn(studentRepositoryStub, 'findOne')
    .mockResolvedValueOnce(studentMock)

  return spyOn
}
