import { requestMockFactory as requestTeacherLogin } from '@/__tests__/controllers/modules/teacher/login/mocks'

export const TeacherLoginRequestDTO = {
  $email: requestTeacherLogin['valid-data'].email,
  $password: requestTeacherLogin['valid-data'].password,
}

export const TeacherLoginResponseDTO = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6I...',
}
