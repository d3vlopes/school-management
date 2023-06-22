import { AcademicTermModel } from '@/core/models'

export const academicTermMock: AcademicTermModel = {
  id: '123456',
  name: 'Academic Term',
  description: 'Loren ipsum dolor',
  duration: '3 mês',
  createdBy: 'admin_id',
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}

export const academicTermsMock: AcademicTermModel[] = [
  {
    id: '123456',
    name: 'Academic Term',
    description: 'Loren ipsum dolor',
    duration: '3 mês',
    createdBy: 'admin_id',
    createdAt: new Date(23, 5),
    updatedAt: new Date(23, 5),
  },
  {
    id: '123456',
    name: 'Academic Term 2',
    description: 'Loren ipsum dolor',
    duration: '6 mês',
    createdBy: 'admin_id',
    createdAt: new Date(26, 5),
    updatedAt: new Date(26, 5),
  },
]
