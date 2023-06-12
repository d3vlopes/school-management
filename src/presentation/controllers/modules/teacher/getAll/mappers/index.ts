import { TeacherGetAllResponseDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TeacherGetAllMapper
  implements IMapper<TeacherModel, TeacherGetAllResponseDTO>
{
  toDTO(data: TeacherModel[]): TeacherGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      role: item.role,
      teacherId: item.teacherId,
      isWithdrawn: item.isWithdrawn,
      isSuspended: item.isSuspended,
      dateEmployed: item.dateEmployed,
      applicationStatus: item.applicationStatus,
      createdBy: item.createdBy,
      createdAt: item.createdAt,
    }))
  }
}

export const teacherGetAllMapper = new TeacherGetAllMapper()
