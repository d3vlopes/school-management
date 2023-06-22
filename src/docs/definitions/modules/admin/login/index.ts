import { requestMockFactory as requestAdminLogin } from '@/__tests__/controllers/modules/admin/login/mocks'

export const AdminLoginRequestDTO = {
  $email: requestAdminLogin['valid-credentials'].email,
  $password: requestAdminLogin['valid-credentials'].password,
}

export const AdminLoginResponseDTO = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6I...',
}
