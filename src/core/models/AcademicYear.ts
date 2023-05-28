export interface AcademicYearModel {
  id: string
  name: string
  year: number
  isCurrent?: boolean
  createdBy?: string
  students?: string[]
  teachers?: string[]
  createdAt: Date
  updatedAt: Date
}
