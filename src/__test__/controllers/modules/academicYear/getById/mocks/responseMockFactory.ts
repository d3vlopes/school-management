import { AcademicYearGetByIdResponseDTO } from '@/core/dtos/academicYear'

export const responseMockFactory: AcademicYearGetByIdResponseDTO = {
  id: '12345',
  name: 'Academic Year',
  year: 1994,
  createdBy: 'user_id',
  isCurrent: false,
  students: [],
  teachers: [],
}
