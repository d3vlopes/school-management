import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { AdminRepository } from '@/infra/database/mongoDB/repositories'
import { AdminRoleMiddleware } from '@/presentation/middlewares'

export const makeAdminRoleMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const adminRepository = new AdminRepository()
  const adminRoleMiddleware = new AdminRoleMiddleware(
    adminRepository,
    jsonWebTokenAdapter,
  )

  return adminRoleMiddleware
}
