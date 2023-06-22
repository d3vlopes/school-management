import { responseMockFactory } from '@/__tests__/controllers/modules/academicYear/getById/mocks'

export const AcademicYearGetByIdResponseDTO = {
  ...responseMockFactory,
  id: '7152bce4fe1eca6fbd444a56',
}

export const AcademicYearNotFoundError = {
  error: 'Academic year not found',
}
