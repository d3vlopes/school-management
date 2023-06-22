import { AcademicTermCreateResponseDTO } from '@/core/dtos/academicTerm'

export const responseMockFactory: AcademicTermCreateResponseDTO = {
  id: '123456',
  name: 'Academic Term',
  description: 'Loren ipsum dolor',
  duration: '3 mês',
  createdBy: 'admin_id',
}
