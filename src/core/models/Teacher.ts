export interface TeacherModel {
  id: string
  name: string
  email: string
  password: string
  dateEmployed?: Date
  teacherId: string
  isWithdrawn?: boolean
  isSuspended?: boolean
  role?: string
  applicationStatus?: 'pending' | 'approved' | 'rejected'
  createdBy?: string
  createdAt: Date
  updatedAt: Date
}
