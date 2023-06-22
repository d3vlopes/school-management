import { TeacherGetByIdResponseDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TeacherGetByIdMapper
  implements IMapper<TeacherModel, TeacherGetByIdResponseDTO>
{
  toDTO(model: TeacherModel): TeacherGetByIdResponseDTO {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
      applicationStatus: model.applicationStatus,
      createdBy: model.createdBy,
      role: model.role,
      teacherId: model.teacherId,
      isWithdrawn: model.isWithdrawn,
      isSuspended: model.isSuspended,
      dateEmployed: model.dateEmployed,
      createdAt: model.createdAt,
    }
  }
}

export const teacherGetByIdMapper = new TeacherGetByIdMapper()
