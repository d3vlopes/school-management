import { vitest } from 'vitest'

import { AdminUpdateRequestDTO } from '@/core/dtos/admin'
import { IAdminRepository } from '@/core/repositories'

import { createAdminMockFactory as adminMock } from '@/__test__/mocks'

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
