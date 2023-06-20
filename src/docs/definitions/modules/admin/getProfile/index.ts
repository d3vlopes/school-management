import { responseMockFactory as adminGetProfile } from '@/__tests__/controllers/modules/admin/getProfile/mocks'

export const AdminGetProfileNotFound = {
  error: 'Admin not found',
}

export const AdminGetProfileResponseDTO = {
  ...adminGetProfile,
}
