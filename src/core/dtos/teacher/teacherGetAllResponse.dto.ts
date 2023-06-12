import { TeacherModel } from '@/core/models'

export type TeacherGetAllResponseDTO = Omit<
  TeacherModel,
  'updatedAt' | 'password'
>
