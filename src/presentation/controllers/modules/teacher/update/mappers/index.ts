import { TeacherUpdateResponseDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TeacherUpdateMapper
  implements IMapper<TeacherModel, TeacherUpdateResponseDTO>
{
  toDTO(model: TeacherModel): TeacherUpdateResponseDTO {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
      teacherId: model.teacherId,
      dateEmployed: model.dateEmployed,
      isWithdrawn: model.isWithdrawn,
      isSuspended: model.isSuspended,
      role: model.role,
      applicationStatus: model.applicationStatus,
      createdBy: model.createdBy,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    }
  }
}

export const teacherUpdateMapper = new TeacherUpdateMapper()
