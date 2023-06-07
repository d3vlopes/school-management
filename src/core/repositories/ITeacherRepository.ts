import { TeacherModel } from '@/core/models'
import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'

export interface ITeacherRepository {
  create(data: TeacherRegisterRequestDTO): Promise<TeacherModel>
  findOne(data: Partial<TeacherModel>): Promise<TeacherModel | null>
}
