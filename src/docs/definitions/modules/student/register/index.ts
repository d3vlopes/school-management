import {
  responseMockFactory as responseStudentRegister,
  requestMockFactory as requestStudentRegister,
} from '@/__tests__/controllers/modules/student/register/mocks'

export const StudentRegisterResponseDTO =
  responseStudentRegister['success'].body

export const StudentRegisterRequestDTO = {
  $name: requestStudentRegister['valid-data'].name,
  $email: requestStudentRegister['valid-data'].email,
  $password: requestStudentRegister['valid-data'].password,
}
