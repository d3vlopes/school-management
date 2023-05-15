import { AdminRepository } from '@/infra/database/mongoDB/repositories'
import { AdminGetAllController } from '@/presentation/controllers/modules/admin'
import { AdminGetAllUseCase } from '@/useCases/modules/admin'

export const makeAdminGetAllController = () => {
  const adminRepository = new AdminRepository()

  const adminGetAllUseCase = new AdminGetAllUseCase(adminRepository)
  const adminGetAllController = new AdminGetAllController(
    adminGetAllUseCase,
  )

  return adminGetAllController
}
