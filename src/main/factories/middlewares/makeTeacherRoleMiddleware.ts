import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { TeacherRepository } from '@/infra/database/mongoDB/repositories'
import { TeacherRoleMiddleware } from '@/presentation/middlewares'

export const makeTeacherRoleMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const teacherRepository = new TeacherRepository()
  const teacherRoleMiddleware = new TeacherRoleMiddleware(
    teacherRepository,
    jsonWebTokenAdapter,
  )

  return teacherRoleMiddleware
}
