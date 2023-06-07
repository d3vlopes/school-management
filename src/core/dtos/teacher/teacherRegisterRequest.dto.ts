import { TeacherModel } from '@/core/models'

export type TeacherRegisterRequestDTO = Pick<
  TeacherModel,
  'name' | 'password' | 'email'
>
