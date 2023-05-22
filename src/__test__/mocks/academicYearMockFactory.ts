import { AcademicYearModel } from '@/core/models'

export const academicYearMockFactory: AcademicYearModel = {
  id: '12345',
  name: 'Academic Year',
  year: 1994,
  createdBy: 'user_id',
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}

export const academicYearsMockFactory: AcademicYearModel[] = [
  {
    id: '12345',
    name: 'Academic Year',
    year: 1994,
    createdBy: 'user_id',
    createdAt: new Date(23, 5),
    updatedAt: new Date(23, 5),
  },
  {
    id: '67898',
    name: 'Academic Year 2',
    year: 1994,
    createdBy: 'user_id',
    createdAt: new Date(24, 5),
    updatedAt: new Date(24, 5),
  },
]
