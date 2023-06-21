import { responseMockFactory } from '@/__tests__/controllers/modules/teacher/getById/mocks'

export const TeacherGetByIdResponseDTO =
  responseMockFactory['success'].body

export const TeacherNotFoundError = {
  error: 'Teacher not found',
}
