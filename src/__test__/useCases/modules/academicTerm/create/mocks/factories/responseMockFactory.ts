import { academicTermMockFactory } from '@/__test__/mocks'

import { AcademicTermModel } from '@/core/models'

import { IUseCaseResponse } from '@/useCases/contracts/shared'

type ResponseMockFactory = 'exists-name' | 'success'

export const responseMockFactory: Record<
  ResponseMockFactory,
  IUseCaseResponse<AcademicTermModel>
> = {
  'exists-name': {
    data: null,
    error: 'Academic Term already exists with that name',
  },
  success: {
    data: academicTermMockFactory,
    error: null,
  },
}
