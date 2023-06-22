import { AcademicYearUpdateResponseDTO } from '@/core/dtos/academicYear'

export const responseMockFactory: AcademicYearUpdateResponseDTO = {
  id: '12345',
  name: 'Academic Year Update',
  year: 1994,
  createdBy: 'user_id',
  isCurrent: false,
  students: [],
  teachers: [],
}
