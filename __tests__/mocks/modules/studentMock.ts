import { StudentModel } from '@/core/models'

export const studentMock: StudentModel = {
  id: '1235478',
  name: 'Student Mock',
  email: 'email@provider.com',
  password: 'password_encrypted',
  studentId: 'generate_student_id',
  dateAdmitted: new Date(23, 5),
  isWithdrawn: false,
  isSuspended: false,
  isGraduated: false,
  role: 'student',
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}

export const studentsMock: StudentModel[] = [
  {
    id: '1235478',
    name: 'Student Mock',
    email: 'email@provider.com',
    password: 'password_encrypted',
    studentId: 'generate_student_id',
    dateAdmitted: new Date(23, 5),
    isWithdrawn: false,
    isSuspended: false,
    isGraduated: false,
    role: 'student',
    createdAt: new Date(23, 5),
    updatedAt: new Date(23, 5),
  },
  {
    id: '98564787',
    name: 'Student Mock 2',
    email: 'email@provider.com',
    password: 'password_encrypted',
    studentId: 'generate_student_id',
    dateAdmitted: new Date(13, 6),
    isWithdrawn: false,
    isSuspended: false,
    isGraduated: false,
    role: 'student',
    createdAt: new Date(13, 6),
    updatedAt: new Date(15, 6),
  },
]
