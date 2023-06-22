import { TeacherModel } from '@/core/models'
import {
  TeacherRegisterRequestDTO,
  TeacherUpdateRequestDTO,
} from '@/core/dtos/teacher'

export interface ITeacherRepository {
  create(
    data: TeacherRegisterRequestDTO & { teacherId: string },
  ): Promise<TeacherModel>
  findOne(data: Partial<TeacherModel>): Promise<TeacherModel | null>
  findAll(): Promise<TeacherModel[]>
  update(
    id: string,
    data: Omit<TeacherUpdateRequestDTO, 'id'>,
  ): Promise<TeacherModel | null>
}
