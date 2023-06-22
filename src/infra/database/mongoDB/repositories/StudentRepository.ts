import { StudentRegisterRequestDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'
import { IStudentRepository } from '@/core/repositories'

import { Student } from '../models'

export class StudentRepository implements IStudentRepository {
  async create(
    data: StudentRegisterRequestDTO & { studentId: string },
  ): Promise<StudentModel> {
    const student = new Student(data)

    await student.save()

    student.id = student._id

    return student
  }

  async findOne(
    data: Partial<StudentModel>,
  ): Promise<StudentModel | null> {
    let student = null

    if (data.id) {
      student = await Student.findOne({ _id: data.id })
    } else {
      student = await Student.findOne(data)
    }

    return student
  }

  async findAll(): Promise<StudentModel[]> {
    const students = await Student.find()

    return students
  }
}
