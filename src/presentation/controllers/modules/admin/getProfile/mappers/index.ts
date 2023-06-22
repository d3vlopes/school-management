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
      academicTerms: model.academicTerms?.map((academicTerm) => ({
        id: academicTerm.id,
        name: academicTerm.name,
        description: academicTerm.description,
        duration: academicTerm.duration,
        createdBy: academicTerm.createdBy,
        createdAt: academicTerm.createdAt,
        updatedAt: academicTerm.updatedAt,
      })),
      academicYears: model.academicYears?.map((academicYear) => ({
        id: academicYear.id,
        name: academicYear.name,
        year: academicYear.year,
        isCurrent: academicYear.isCurrent,
        createdBy: academicYear.createdBy,
        createdAt: academicYear.createdAt,
        updatedAt: academicYear.updatedAt,
      })),
      classLevels: model.classLevels,
      programs: model.programs,
      students: model.students,
      teachers: model.teachers,
      yearGroups: model.yearGroups,
    }
  }
}

export const adminGetProfileMapper = new AdminGetProfileMapper()
