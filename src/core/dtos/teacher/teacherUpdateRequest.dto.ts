import { TeacherModel } from '@/core/models'

export type TeacherUpdateRequestDTO = Partial<
  Pick<TeacherModel, 'name' | 'email' | 'password'>
> & { id: string }
