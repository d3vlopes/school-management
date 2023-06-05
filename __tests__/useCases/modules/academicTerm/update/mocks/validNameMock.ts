import { vitest } from 'vitest'

import { academicTermRepositoryStub } from '@/__tests__/stubs'

export const validNameMock = () => {
  const spyOn = vitest
    .spyOn(academicTermRepositoryStub, 'findOne')
    .mockResolvedValueOnce(null)

  return spyOn
}
