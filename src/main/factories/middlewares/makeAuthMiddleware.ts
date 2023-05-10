import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { AuthMiddleware } from '@/presentation/middlewares'

export const makeAuthMiddleware = () => {
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const authMiddleware = new AuthMiddleware(jsonWebTokenAdapter)

  return authMiddleware
}
