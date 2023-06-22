import {
  TeacherRegisterRequestDTO,
  TeacherUpdateRequestDTO,
} from '@/core/dtos/teacher'
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

  async findAll(): Promise<TeacherModel[]> {
    const teachers = await Teacher.find()

    return teachers
  }

  async update(
    id: string,
    data: Omit<TeacherUpdateRequestDTO, 'id'>,
  ): Promise<TeacherModel | null> {
    const teacher = await Teacher.findByIdAndUpdate(id, data, {
      new: true,
    })

    return teacher
  }
}
