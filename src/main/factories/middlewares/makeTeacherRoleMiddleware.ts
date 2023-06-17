import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'

import { RoleMiddleware } from '@/presentation/middlewares'

export const makeTeacherRoleMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const teacherRoleMiddleware = new RoleMiddleware(
    jsonWebTokenAdapter,
    'teacher',
  )

  return teacherRoleMiddleware
}
