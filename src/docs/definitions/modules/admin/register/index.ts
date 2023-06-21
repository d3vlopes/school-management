import {
  responseMockFactory as responseAdminRegister,
  requestMockFactory as requestAdminRegister,
} from '@/__tests__/controllers/modules/admin/register/mocks'

export const AdminRegisterResponseDTO = responseAdminRegister

export const AdminRegisterRequestDTO = {
  $name: requestAdminRegister.name,
  $email: requestAdminRegister.email,
  $password: requestAdminRegister.password,
}
