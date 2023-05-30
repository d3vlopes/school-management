import { AcademicYearModel } from './AcademicYear'

export interface AdminModel {
  id: string
  name: string
  email: string
  password: string
  role: string
  academicTerms?: string[]
  programs?: string[]
  yearGroups?: string[]
  academicYears?: AcademicYearModel[]
  classLevels?: string[]
  teachers?: string[]
  students?: string[]
  createdAt: Date
  updatedAt: Date
}
