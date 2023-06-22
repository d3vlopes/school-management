import { AcademicYearModel } from './AcademicYear'

export interface StudentModel {
  id: string
  name: string
  email: string
  password: string
  studentId: string
  role?: string
  academicYear?: AcademicYearModel
  dateAdmitted?: Date
  isGraduated?: boolean
  isWithdrawn?: boolean
  isSuspended?: boolean
  yearGraduated?: string
  createdAt: Date
  updatedAt: Date
}
