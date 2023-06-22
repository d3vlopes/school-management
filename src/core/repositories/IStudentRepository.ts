import { StudentModel } from '@/core/models'
import { StudentRegisterRequestDTO } from '@/core/dtos/student'

export interface IStudentRepository {
  create(
    data: StudentRegisterRequestDTO & { studentId: string },
  ): Promise<StudentModel>
  findOne(data: Partial<StudentModel>): Promise<StudentModel | null>
  findAll(): Promise<StudentModel[]>
}
