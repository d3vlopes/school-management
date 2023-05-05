import { AdminRegisterResponseDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class AdminRegisterMapper
  implements IMapper<AdminModel, AdminRegisterResponseDTO>
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

export const adminRegisterMapper = new AdminRegisterMapper()
