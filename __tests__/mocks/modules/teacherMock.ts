import { TeacherModel } from '@/core/models'

export const teacherMock: TeacherModel = {
  id: '1235478',
  name: 'Teacher Mock',
  email: 'email@provider.com',
  password: 'password_encrypted',
  teacherId: 'generate_teacher_id',
  dateEmployed: new Date(23, 5),
  isWithdrawn: false,
  isSuspended: false,
  role: 'teacher',
  applicationStatus: 'pending',
  createdBy: 'admin_id',
  createdAt: new Date(23, 5),
  updatedAt: new Date(23, 5),
}
