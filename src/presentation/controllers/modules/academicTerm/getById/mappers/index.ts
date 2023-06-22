import { AcademicTermModel } from '@/core/models'
import { AcademicTermGetByIdResponseDTO } from '@/core/dtos/academicTerm'

import { IMapper } from '@/presentation/contracts'

class AcademicTermGetByIdMapper
  implements
    IMapper<AcademicTermModel, AcademicTermGetByIdResponseDTO>
{
  toDTO(data: AcademicTermModel): AcademicTermGetByIdResponseDTO {
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

export const academicTermGetByIdMapper =
  new AcademicTermGetByIdMapper()
