import { AdminModel } from '@/core/models'

export const createAdminMockFactory: AdminModel = {
  id: '1234',
  name: 'User Name',
  email: 'user@email.com',
  role: 'admin',
  password: 'password_encrypted',
  academicTerms: [],
  academicYears: [],
  classLevels: [],
  programs: [],
  students: [],
  teachers: [],
  yearGroups: [],
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}
