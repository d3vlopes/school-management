import { AdminModel } from '@/core/models'

export type AdminRegisterRequestDTO = Pick<
  AdminModel,
  'name' | 'email' | 'password'
>
