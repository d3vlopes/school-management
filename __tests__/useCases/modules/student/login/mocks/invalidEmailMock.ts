import { vitest } from 'vitest'

import { studentRepositoryStub } from '@/__tests__/stubs'

export const invalidEmailMock = () => {
  const spyOn = vitest
    .spyOn(studentRepositoryStub, 'findOne')
    .mockResolvedValueOnce(null)

  return spyOn
}
