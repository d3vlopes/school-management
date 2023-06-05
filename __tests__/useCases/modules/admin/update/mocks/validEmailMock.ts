import { vitest } from 'vitest'

import { IAdminRepository } from '@/core/repositories'

export const validEmailMock = (stub: IAdminRepository) => {
  const spyOn = vitest
    .spyOn(stub, 'findOne')
    .mockResolvedValueOnce(null)

  return spyOn
}
