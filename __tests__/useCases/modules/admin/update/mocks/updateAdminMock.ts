import { vitest } from 'vitest'

import { createAdminMock as adminMock } from '@/__tests__/mocks/modules'

import { IAdminRepository } from '@/core/repositories'

interface IData {
  email?: string
  name?: string
  password?: string
}

export const updateAdminMock = (
  stub: IAdminRepository,
  data: IData,
) => {
  const spyOn = vitest
    .spyOn(stub, 'findByIdAndUpdate')
    .mockResolvedValueOnce({
      ...adminMock,
      ...data,
    })

  return spyOn
}
