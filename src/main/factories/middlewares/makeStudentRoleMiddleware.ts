import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'

import { RoleMiddleware } from '@/presentation/middlewares'

export const makeStudentRoleMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const studentRoleMiddleware = new RoleMiddleware(
    jsonWebTokenAdapter,
    'student',
  )

  return studentRoleMiddleware
}
