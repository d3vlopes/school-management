import { AdminGetAllResponseDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class AdminGetAllMapper
  implements IMapper<AdminModel, AdminGetAllResponseDTO>
{
  toDTO(data: AdminModel[]): AdminGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      role: item.role,
      academicTerms: item.academicTerms,
      academicYears: item.academicYears,
      classLevels: item.classLevels,
      programs: item.programs,
      students: item.students,
      teachers: item.teachers,
      yearGroups: item.yearGroups,
    }))
  }
}

export const adminGetAllMapper = new AdminGetAllMapper()
