import { StudentModel } from '@/core/models'

export type StudentGetAllResponseDTO = Omit<
  StudentModel,
  'password' | 'updatedAt'
>
