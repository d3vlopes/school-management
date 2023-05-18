import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'
import { AdminRepository } from '@/infra/database/mongoDB/repositories'

import { AdminUpdateController } from '@/presentation/controllers/modules/admin'

import { AdminUpdateUseCase } from '@/useCases/modules/admin'

export const makeAdminUpdateController = () => {
  const adminRepository = new AdminRepository()
  const bcryptAdapter = new BcryptAdapter()
  const zodValidatorAdapter = new ZodValidatorAdapter()

  const adminUpdateUseCase = new AdminUpdateUseCase(
    adminRepository,
    bcryptAdapter,
    zodValidatorAdapter,
  )
  const adminUpdateController = new AdminUpdateController(
    adminUpdateUseCase,
  )

  return adminUpdateController
}
