import { AcademicTermModel } from '@/core/models'

export const academicTermMockFactory: AcademicTermModel = {
  id: '123456',
  name: 'Academic Term',
  description: 'Loren ipsum dolor',
  duration: '3 mês',
  createdBy: 'admin_id',
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}
