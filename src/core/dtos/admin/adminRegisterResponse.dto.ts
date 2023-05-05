import { AdminModel } from '@/core/models'

export type AdminRegisterResponseDTO = Omit<
  AdminModel,
  'createdAt' | 'updatedAt' | 'password'
>
