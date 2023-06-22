import {
  ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

import { handleUseCaseReturn } from '@/useCases/helpers'

export const invalidYearError = () => {
  return handleUseCaseReturn(
    null,
    ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
  )
}

export const existsAcademicYearError = () => {
  return handleUseCaseReturn(
    null,
    ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
  )
}
