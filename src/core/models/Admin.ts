import { AcademicYearModel } from './AcademicYear'
import { AcademicTermModel } from './AcademicTerm'

export interface AdminModel {
  id: string
  name: string
  email: string
  password: string
  role: string
  academicTerms?: AcademicTermModel[]
  programs?: string[]
  yearGroups?: string[]
  academicYears?: AcademicYearModel[]
  classLevels?: string[]
  teachers?: string[]
  students?: string[]
  createdAt: Date
  updatedAt: Date
}
