import { StudentModel } from '@/core/models'

export type StudentRegisterResponseDTO = Omit<
  StudentModel,
  'password' | 'updatedAt'
>
