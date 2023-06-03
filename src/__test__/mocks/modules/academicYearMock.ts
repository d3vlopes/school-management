import { AcademicYearModel } from '@/core/models'

export const academicYearMock: AcademicYearModel = {
  id: '12345',
  name: 'Academic Year',
  year: 1994,
  createdBy: 'user_id',
  isCurrent: false,
  students: [],
  teachers: [],
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}

export const academicYearsMock: AcademicYearModel[] = [
  {
    id: '12345',
    name: 'Academic Year',
    year: 1994,
    createdBy: 'user_id',
    isCurrent: false,
    students: [],
    teachers: [],
    createdAt: new Date(23, 5),
    updatedAt: new Date(23, 5),
  },
  {
    id: '67898',
    name: 'Academic Year 2',
    year: 1994,
    createdBy: 'user_id',
    isCurrent: false,
    students: [],
    teachers: [],
    createdAt: new Date(24, 5),
    updatedAt: new Date(24, 5),
  },
]
