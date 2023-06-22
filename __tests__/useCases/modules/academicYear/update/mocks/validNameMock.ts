import { vitest } from 'vitest'

import { IAcademicYearRepository } from '@/core/repositories'

export const validNameMock = (stub: IAcademicYearRepository) => {
  vitest.spyOn(stub, 'findOne').mockResolvedValueOnce(null)
}
