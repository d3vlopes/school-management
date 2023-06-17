import { StudentModel } from '@/core/models'

export type StudentLoginRequestDTO = Pick<
  StudentModel,
  'email' | 'password'
>
