import { responseMockFactory } from '@/__tests__/controllers/modules/teacher/getProfile/mocks'

export const TeacherGetProfileNotFound = {
  error: 'Teacher not found',
}

export const TeacherGetProfileResponseDTO =
  responseMockFactory['success'].body
