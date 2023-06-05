import { AcademicTermModel } from '@/core/models'
import { AcademicTermUpdateResponseDTO } from '@/core/dtos/academicTerm'

import { IMapper } from '@/presentation/contracts'

class AcademicTermUpdatedMapper
  implements
    IMapper<AcademicTermModel, AcademicTermUpdateResponseDTO>
{
  toDTO(data: AcademicTermModel): AcademicTermUpdateResponseDTO {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      duration: data.duration,
      createdBy: data.createdBy,
      createdAt: data.createdAt,
    }
  }
}

export const academicTermUpdatedMapper =
  new AcademicTermUpdatedMapper()
