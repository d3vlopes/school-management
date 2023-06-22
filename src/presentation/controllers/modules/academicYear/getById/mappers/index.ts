import { AcademicYearModel } from '@/core/models'
import { AcademicYearGetByIdResponseDTO } from '@/core/dtos/academicYear'

import { IMapper } from '@/presentation/contracts'

class AcademicYearGetByIdMapper
  implements
    IMapper<AcademicYearModel, AcademicYearGetByIdResponseDTO>
{
  toDTO(data: AcademicYearModel): AcademicYearGetByIdResponseDTO {
    return {
      id: data.id,
      name: data.name,
      createdBy: data.createdBy,
      year: data.year,
      isCurrent: data.isCurrent,
      students: data.students,
      teachers: data.teachers,
    }
  }
}

export const academicYearGetByIdMapper =
  new AcademicYearGetByIdMapper()
