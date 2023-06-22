import { TeacherModel } from '@/core/models'

export type TeacherGetByIdResponseDTO = Omit<
  TeacherModel,
  'updatedAt' | 'password'
>
