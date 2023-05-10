import { AdminRegisterResponseDTO } from '@/core/dtos/admin'

export const returnMockFactory: AdminRegisterResponseDTO = {
  id: '1234',
  name: 'User Name',
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
