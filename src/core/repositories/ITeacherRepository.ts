import { TeacherModel } from '@/core/models'
import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'

export interface ITeacherRepository {
  create(
    data: TeacherRegisterRequestDTO & { teacherId: string },
  ): Promise<TeacherModel>
  findOne(data: Partial<TeacherModel>): Promise<TeacherModel | null>
  findAll(): Promise<TeacherModel[]>
}
