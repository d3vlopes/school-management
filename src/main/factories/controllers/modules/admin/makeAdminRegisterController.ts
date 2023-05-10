import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'
import { AdminRepository } from '@/infra/database/mongoDB/repositories'

import { AdminRegisterController } from '@/presentation/controllers/modules/admin'
import { AdminRegisterUseCase } from '@/useCases/modules/admin'

export const makeAdminRegisterController = () => {
  const adminRepository = new AdminRepository()
  const bcryptAdapter = new BcryptAdapter()
  const zodValidatorAdapter = new ZodValidatorAdapter()

  const adminRegisterUseCase = new AdminRegisterUseCase(
    adminRepository,
    bcryptAdapter,
    zodValidatorAdapter,
  )
  const adminRegisterController = new AdminRegisterController(
    adminRegisterUseCase,
  )

  return adminRegisterController
}
