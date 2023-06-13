import { TeacherModel } from '@/core/models'
import { TeacherGetProfileResponseDTO } from '@/core/dtos/teacher'

import { IMapper } from '@/presentation/contracts'

class TeacherGetProfileMapper
  implements IMapper<TeacherModel, TeacherGetProfileResponseDTO>
{
  toDTO(model: TeacherModel): TeacherGetProfileResponseDTO {
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

export const teacherGetProfileMapper = new TeacherGetProfileMapper()
