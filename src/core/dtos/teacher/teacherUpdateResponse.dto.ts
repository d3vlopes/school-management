import { TeacherModel } from '@/core/models'

export type TeacherUpdateResponseDTO = Omit<TeacherModel, 'password'>
