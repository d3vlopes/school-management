import {
  responseMockFactory as responseTeacherRegister,
  requestMockFactory as requestTeacherRegister,
} from '@/__tests__/controllers/modules/teacher/register/mocks'

export const TeacherRegisterResponseDTO =
  responseTeacherRegister['success'].body

export const TeacherRegisterRequestDTO = {
  $name: requestTeacherRegister['valid-data'].name,
  $email: requestTeacherRegister['valid-data'].email,
  $password: requestTeacherRegister['valid-data'].password,
}
