import { requestMockFactory as requestStudentLogin } from '@/__tests__/controllers/modules/student/login/mocks'

export const StudentLoginRequestDTO = {
  $email: requestStudentLogin['valid-data'].email,
  $password: requestStudentLogin['valid-data'].password,
}

export const StudentLoginResponseDTO = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6I...',
}
