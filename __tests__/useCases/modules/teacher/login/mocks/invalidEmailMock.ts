import { vitest } from 'vitest'

import { teacherRepositoryStub } from '@/__tests__/stubs'

export const invalidEmailMock = () => {
  const spyOn = vitest
    .spyOn(teacherRepositoryStub, 'findOne')
    .mockResolvedValueOnce(null)

  return spyOn
}
