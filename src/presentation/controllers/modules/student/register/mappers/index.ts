import { StudentRegisterResponseDTO } from '@/core/dtos/student'
import { StudentModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class StudentRegisterMapper
  implements IMapper<StudentModel, StudentRegisterResponseDTO>
{
  toDTO(model: StudentModel): StudentRegisterResponseDTO {
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
    }
  }
}

export const studentRegisterMapper = new StudentRegisterMapper()
