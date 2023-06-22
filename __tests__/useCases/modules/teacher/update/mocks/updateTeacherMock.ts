import { vitest } from 'vitest'

import { teacherMock } from '@/__tests__/mocks/modules'
import { teacherRepositoryStub } from '@/__tests__/stubs'

interface IData {
  email?: string
  name?: string
  password?: string
}

export const updateTeacherMock = (data: IData) => {
  const spyOn = vitest
    .spyOn(teacherRepositoryStub, 'update')
    .mockResolvedValueOnce({
      ...teacherMock,
      ...data,
    })

  return spyOn
}
