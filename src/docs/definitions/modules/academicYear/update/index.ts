import { responseMockFactory } from '@/__tests__/controllers/modules/academicYear/getById/mocks'

export const AcademicYearUpdateNameAlreadyExists = {
  error: 'Academic year already exists with that name',
}

export const AcademicYearUpdateResponseDTO = {
  ...responseMockFactory,
  id: '7152bce4fe1eca6fbd444a56',
}
