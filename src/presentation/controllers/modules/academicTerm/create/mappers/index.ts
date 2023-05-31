import {
  AcademicTermCreateRequestDTO,
  AcademicTermCreateResponseDTO,
} from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class AcademicTermCreateMapper
  implements IMapper<AcademicTermModel, AcademicTermCreateRequestDTO>
{
  toDTO(model: AcademicTermModel): AcademicTermCreateResponseDTO {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
      duration: model.duration,
      createdBy: model.createdBy,
    }
  }
}

export const academicTermCreateMapper = new AcademicTermCreateMapper()
