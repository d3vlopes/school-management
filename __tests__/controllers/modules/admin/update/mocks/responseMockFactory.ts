import { AdminUpdateResponseDTO } from '@/core/dtos/admin'

export const responseMockFactory: AdminUpdateResponseDTO = {
  id: '1234',
  name: 'Update admin name',
  email: 'user@email.com',
  role: 'admin',
  academicTerms: [],
  academicYears: [],
  classLevels: [],
  programs: [],
  students: [],
  teachers: [],
  yearGroups: [],
}
