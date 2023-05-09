import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { AdminRepository } from '@/infra/database/mongoDB/repositories'
import { AdminLoginController } from '@/presentation/controllers/modules/admin'
import { AdminLoginUseCase } from '@/useCases/modules/admin'

export const makeAdminLoginController = () => {
  const bcryptAdapter = new BcryptAdapter()
  const adminRepository = new AdminRepository()
  const jsonWebTokenAdapter = new JsonWebTokenAdapter()

  const adminLoginUseCase = new AdminLoginUseCase(
    adminRepository,
    bcryptAdapter,
    jsonWebTokenAdapter,
  )
  const adminLoginController = new AdminLoginController(
    adminLoginUseCase,
  )

  return adminLoginController
}
