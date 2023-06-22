import { vitest } from 'vitest'

import { academicTermRepositoryStub } from '@/__tests__/stubs'

export const updateAcademicTermMock = (data: unknown) => {
  const spyOn = vitest
    .spyOn(academicTermRepositoryStub, 'update')
    .mockResolvedValueOnce(data as any)

  return spyOn
}
