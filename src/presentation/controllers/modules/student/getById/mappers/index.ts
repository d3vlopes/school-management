import { StudentGetByIdResponseDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class StudentGetByIdMapper
  implements IMapper<StudentModel, StudentGetByIdResponseDTO>
{
  toDTO(model: StudentModel): StudentGetByIdResponseDTO {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
      studentId: model.studentId,
      dateAdmitted: model.dateAdmitted,
      isWithdrawn: model.isWithdrawn,
      isSuspended: model.isSuspended,
      isGraduated: model.isGraduated,
      role: model.role,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    }
  }
}

export const studentGetByIdMapper = new StudentGetByIdMapper()
