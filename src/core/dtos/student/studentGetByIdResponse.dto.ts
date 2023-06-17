import { StudentModel } from '@/core/models'

export type StudentGetByIdResponseDTO = Omit<StudentModel, 'password'>
