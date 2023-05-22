import { AcademicYearModel } from '@/core/models'
import { AcademicYearGetAllResponseDTO } from '@/core/dtos/academicYear'

import { IMapper } from '@/presentation/contracts'

class AcademicYearGetAllMapper
  implements
    IMapper<AcademicYearModel, AcademicYearGetAllResponseDTO>
{
  toDTO(data: AcademicYearModel[]): AcademicYearGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      createdBy: item.createdBy,
      year: item.year,
      isCurrent: item.isCurrent,
      students: item.students,
      teachers: item.teachers,
    }))
  }
}

export const academicYearGetAllMapper = new AcademicYearGetAllMapper()
