import { TeacherRegisterResponseDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TeacherRegisterMapper
  implements IMapper<TeacherModel, TeacherRegisterResponseDTO>
{
  toDTO(model: TeacherModel): TeacherRegisterResponseDTO {
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

export const teacherRegisterMapper = new TeacherRegisterMapper()
