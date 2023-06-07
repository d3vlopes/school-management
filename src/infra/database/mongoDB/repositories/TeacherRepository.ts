import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'
import { ITeacherRepository } from '@/core/repositories'

import { Teacher } from '../models'

export class TeacherRepository implements ITeacherRepository {
  async create(
    data: TeacherRegisterRequestDTO & { teacherId: string },
  ): Promise<TeacherModel> {
    const teacher = new Teacher(data)

    await teacher.save()

    teacher.id = teacher._id

    return teacher
  }

  async findOne(
    data: Partial<TeacherModel>,
  ): Promise<TeacherModel | null> {
    let teacher = null

    if (data.id) {
      teacher = await Teacher.findOne({ _id: data.id })
    } else {
      teacher = await Teacher.findOne(data)
    }

    return teacher
  }
}
