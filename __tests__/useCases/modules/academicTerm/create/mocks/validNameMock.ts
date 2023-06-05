import { vitest } from 'vitest'

import { IAcademicTermRepository } from '@/core/repositories'

export const validNameMock = (stub: IAcademicTermRepository) => {
  const spyOn = vitest
    .spyOn(stub, 'findOne')
    .mockResolvedValueOnce(null)

  return spyOn
}
