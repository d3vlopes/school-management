import { TeacherModel } from '@/core/models'

export type TeacherRegisterResponseDTO = Omit<
  TeacherModel,
  'updatedAt' | 'password'
>
