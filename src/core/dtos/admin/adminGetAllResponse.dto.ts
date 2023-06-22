import { AdminModel } from '@/core/models'

export type AdminGetAllResponseDTO = Omit<
  AdminModel,
  'createdAt' | 'updatedAt' | 'password'
>
