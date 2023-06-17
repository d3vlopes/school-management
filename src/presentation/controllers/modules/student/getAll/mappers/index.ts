import { StudentGetAllResponseDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class StudentGetAllMapper
  implements IMapper<StudentModel, StudentGetAllResponseDTO>
{
  toDTO(data: StudentModel[]): StudentGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      studentId: item.studentId,
      dateAdmitted: item.dateAdmitted,
      isWithdrawn: item.isWithdrawn,
      isSuspended: item.isSuspended,
      isGraduated: item.isGraduated,
      role: item.role,
      createdAt: item.createdAt,
    }))
  }
}

export const studentGetAllMapper = new StudentGetAllMapper()
