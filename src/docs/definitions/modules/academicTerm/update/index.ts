import { responseMockFactory } from '@/__tests__/controllers/modules/academicTerm/getById/mocks'

export const AcademicTermUpdateNameAlreadyExists = {
  error: 'Academic term already exists with that name',
}

export const AcademicTermUpdateResponseDTO =
  responseMockFactory['ok'].body
