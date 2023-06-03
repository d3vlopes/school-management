import { vitest } from 'vitest'

import { IAdminRepository } from '@/core/repositories'

import { createAdminMock as adminMock } from '@/__test__/mocks/modules'

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
