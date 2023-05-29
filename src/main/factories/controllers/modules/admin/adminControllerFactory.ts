import { InstanceFactory } from '@/main/factories/shared'

import {
  AdminGetAllUseCase,
  AdminGetProfileUseCase,
  AdminLoginUseCase,
  AdminRegisterUseCase,
  AdminUpdateUseCase,
} from '@/useCases/modules/admin'

import {
  AdminGetAllController,
  AdminGetProfileController,
  AdminLoginController,
  AdminRegisterController,
  AdminUpdateController,
} from '@/presentation/controllers/modules/admin'

export enum AdminControllerAction {
  REGISTER,
  LOGIN,
  UPDATE,
  GET_PROFILE,
  GET_ALL,
}

const adminRepository = InstanceFactory.createAdminRepository()

const zodValidatorAdapter =
  InstanceFactory.createZodValidatorAdapter()

const bcryptAdapter = InstanceFactory.createBcryptAdapter()

const jsonWebTokenAdapter =
  InstanceFactory.createJsonWebTokenAdapter()

export class AdminControllerFactory {
  makeController(action: AdminControllerAction) {
    switch (action) {
      case AdminControllerAction.REGISTER:
        const adminRegisterUseCase = new AdminRegisterUseCase(
          adminRepository,
          bcryptAdapter,
          zodValidatorAdapter,
        )

        return new AdminRegisterController(adminRegisterUseCase)

      case AdminControllerAction.LOGIN:
        const adminLoginUseCase = new AdminLoginUseCase(
          adminRepository,
          bcryptAdapter,
          jsonWebTokenAdapter,
        )

        return new AdminLoginController(adminLoginUseCase)

      case AdminControllerAction.UPDATE:
        const adminUpdateUseCase = new AdminUpdateUseCase(
          adminRepository,
          bcryptAdapter,
          zodValidatorAdapter,
        )

        return new AdminUpdateController(adminUpdateUseCase)

      case AdminControllerAction.GET_PROFILE:
        const adminGetProfileUseCase = new AdminGetProfileUseCase(
          adminRepository,
        )

        return new AdminGetProfileController(adminGetProfileUseCase)

      case AdminControllerAction.GET_ALL:
        const adminGetAllUseCase = new AdminGetAllUseCase(
          adminRepository,
        )

        return new AdminGetAllController(adminGetAllUseCase)
    }
  }
}
