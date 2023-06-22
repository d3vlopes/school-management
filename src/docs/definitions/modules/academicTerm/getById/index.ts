import { responseMockFactory } from '@/__tests__/controllers/modules/academicTerm/getById/mocks'

export const AcademicTermGetByIdResponseDTO =
  responseMockFactory['ok'].body

export const AcademicTermNotFoundError = {
  error: 'Academic term not found',
}
