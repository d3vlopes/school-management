import { academicYearMock } from '@/__tests__/mocks/modules'

import { AcademicYearModel } from '@/core/models'

import { IUseCaseResponse } from '@/useCases/contracts/shared'

import {
  ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

type ResponseMockType =
  | 'invalid-name'
  | 'invalid-year'
  | 'exists-name'
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
  'exists-name': {
    data: null,
    error: ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
  },
  valid: {
    data: {
      ...academicYearMock,
      name: 'Academic Year Update',
    },
    error: null,
  },
}
