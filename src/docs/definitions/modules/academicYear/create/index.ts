import { requestMockFactory } from '@/__tests__/controllers/modules/academicYear/create/mocks'

export const AcademicYearCreateRequestDTO = {
  $name: requestMockFactory['valid'].name,
  $year: requestMockFactory['valid'].year,
}

export const AcademicYearCreateResponseDTO = {
  id: '6488afc4fe1eca6fbd444a56',
  name: 'Academic Year',
  year: 1994,
}

export const AcademicYearNameAlreadyExistsError = {
  error: 'Academic year already exists with that name',
}
