import { AcademicYearModel } from '@/core/models'
import { AcademicYearUpdateResponseDTO } from '@/core/dtos/academicYear'

import { IMapper } from '@/presentation/contracts'

class AcademicYearUpdatedMapper
  implements
    IMapper<AcademicYearModel, AcademicYearUpdateResponseDTO>
{
  toDTO(data: AcademicYearModel): AcademicYearUpdateResponseDTO {
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

export const academicYearUpdatedMapper =
  new AcademicYearUpdatedMapper()
