import {
  requestMockFactory,
  responseMockFactory,
} from '@/__tests__/controllers/modules/academicTerm/create/mocks'

export const AcademicTermCreateRequestDTO = {
  $name: requestMockFactory['valid'].name,
  $description: requestMockFactory['valid'].description,
  $duration: requestMockFactory['valid'].duration,
}

export const AcademicTermCreateResponseDTO = responseMockFactory

export const AcademicTermNameAlreadyExistsError = {
  error: 'Academic term already exists with that name',
}
