import { StudentModel } from '@/core/models'

export type StudentRegisterRequestDTO = Pick<
  StudentModel,
  'name' | 'password' | 'email'
>
