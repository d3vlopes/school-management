import { responseMockFactory } from '@/__tests__/controllers/modules/student/getById/mocks'

export const StudentGetByIdResponseDTO =
  responseMockFactory['success'].body

export const StudentNotFoundError = {
  error: 'Student not found',
}
