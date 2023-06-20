import {
  returnMockFactory as returnAdminRegister,
  requestMockFactory as requestAdminRegister,
} from '@/__tests__/controllers/modules/admin/register/mocks'

export const AdminRegisterResponseDTO = { ...returnAdminRegister }

export const AdminRegisterRequestDTO = {
  $name: requestAdminRegister.name,
  $email: requestAdminRegister.email,
  $password: requestAdminRegister.password,
}
