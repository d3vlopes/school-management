import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class AcademicYearCreateMapper
  implements IMapper<AcademicYearModel, AcademicYearCreateRequestDTO>
{
  toDTO(model: AcademicYearModel): AcademicYearCreateRequestDTO {
    return {
      id: model.id,
      name: model.name,
      year: model.year,
    }
  }
}

export const academicYearCreateMapper = new AcademicYearCreateMapper()
