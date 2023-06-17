import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'

import { RoleMiddleware } from '@/presentation/middlewares'

export const makeAdminRoleMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const adminRoleMiddleware = new RoleMiddleware(
    jsonWebTokenAdapter,
    'admin',
  )

  return adminRoleMiddleware
}
