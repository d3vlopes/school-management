import { TeacherModel } from '@/core/models'

export type TeacherGetProfileResponseDTO = Omit<
  TeacherModel,
  'password'
>
