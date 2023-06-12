import { TeacherModel } from '@/core/models'
import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'
import { ITeacherRepository } from '@/core/repositories'

import { teacherMock, teachersMock } from '../mocks/modules'

class TeacherRepositoryStub implements ITeacherRepository {
  async create(
    data: TeacherRegisterRequestDTO,
  ): Promise<TeacherModel> {
    const teacher: TeacherModel = {
      id: '1235478',
      name: 'Teacher Mock',
      email: 'email@provider.com',
      password: 'password_encrypted',
      teacherId: 'generate_teacher_id',
      createdAt: new Date(23, 5),
      updatedAt: new Date(23, 5),
    }

    return teacher
  }

  async findOne(
    data: Partial<TeacherModel>,
  ): Promise<TeacherModel | null> {
    return teacherMock
  }

  async findAll(): Promise<TeacherModel[]> {
    return teachersMock
  }
}

export const teacherRepositoryStub = new TeacherRepositoryStub()
