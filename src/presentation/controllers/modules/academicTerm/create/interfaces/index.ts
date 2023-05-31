import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'

export interface IAcademicTermCreateController
  extends AcademicTermCreateRequestDTO {
  user: {
    id: string
  }
}
