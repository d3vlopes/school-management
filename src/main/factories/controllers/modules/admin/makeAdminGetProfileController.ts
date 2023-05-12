import { AdminRepository } from '@/infra/database/mongoDB/repositories'
import { AdminGetProfileController } from '@/presentation/controllers/modules/admin'
import { AdminGetProfileUseCase } from '@/useCases/modules/admin'

export const makeAdminGetProfileController = () => {
  const adminRepository = new AdminRepository()

  const adminGetProfileUseCase = new AdminGetProfileUseCase(
    adminRepository,
  )
  const adminGetProfileController = new AdminGetProfileController(
    adminGetProfileUseCase,
  )

  return adminGetProfileController
}
