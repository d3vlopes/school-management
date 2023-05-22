import { academicYearMockFactory } from '@/__test__/mocks'

import { AcademicYearModel } from '@/core/models'

import { IUseCaseResponse } from '@/useCases/contracts/shared'

import {
  ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
  ACADEMIC_YEAR_EXISTS_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

type ResponseMockType =
  | 'invalid-name'
  | 'invalid-year'
  | 'exists'
  | 'valid'

export const responseMockFactory: Record<
  ResponseMockType,
  IUseCaseResponse<AcademicYearModel>
> = {
  'invalid-name': {
    data: null,
    error: ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  },
  'invalid-year': {
    data: null,
    error: ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
  },
  exists: {
    data: null,
    error: ACADEMIC_YEAR_EXISTS_ERROR_MESSAGE,
  },
  valid: {
    data: academicYearMockFactory,
    error: null,
  },
}