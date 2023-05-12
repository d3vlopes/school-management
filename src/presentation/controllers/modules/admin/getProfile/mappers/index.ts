import { AdminModel } from '@/core/models'
import {
  AdminGetProfileResponseDTO,
  AdminRegisterResponseDTO,
} from '@/core/dtos/admin'

import { IMapper } from '@/presentation/contracts'

class AdminGetProfileMapper
  implements IMapper<AdminModel, AdminGetProfileResponseDTO>
{
  toDTO(model: AdminModel): AdminRegisterResponseDTO {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
      role: model.role,
      academicTerms: model.academicTerms,
      academicYears: model.academicYears,
      classLevels: model.classLevels,
      programs: model.programs,
      students: model.students,
      teachers: model.teachers,
      yearGroups: model.yearGroups,
    }
  }
}

export const adminGetProfileMapper = new AdminGetProfileMapper()
