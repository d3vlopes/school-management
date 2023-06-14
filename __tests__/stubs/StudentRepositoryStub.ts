import { StudentRegisterRequestDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'
import { IStudentRepository } from '@/core/repositories'

import { studentMock } from '../mocks/modules'

class StudentRepositoryStub implements IStudentRepository {
  async create(
    data: StudentRegisterRequestDTO & { studentId: string },
  ): Promise<StudentModel> {
    return studentMock
  }

  async findOne(
    data: Partial<StudentModel>,
  ): Promise<StudentModel | null> {
    return studentMock
  }
}

export const studentRepositoryStub = new StudentRepositoryStub()
