import { AdminModel } from '@/core/models'

export type AdminUpdateResponseDTO = Omit<
  AdminModel,
  'createdAt' | 'updatedAt' | 'password'
>
