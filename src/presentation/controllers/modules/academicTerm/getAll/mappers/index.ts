import { AcademicTermGetAllResponseDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class AcademicTermGetAllMapper
  implements
    IMapper<AcademicTermModel, AcademicTermGetAllResponseDTO>
{
  toDTO(data: AcademicTermModel[]): AcademicTermGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      duration: item.duration,
      createdBy: item.createdBy,
      createdAt: item.createdAt,
    }))
  }
}

export const academicTermGetAllMapper = new AcademicTermGetAllMapper()
