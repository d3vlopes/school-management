import { IAdminRepository } from '@/core/repositories'

import {
  InstanceFactory,
  Repositories,
} from '@/main/factories/shared'

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

export enum AdminModuleAction {
  REGISTER,
  LOGIN,
  UPDATE,
  GET_PROFILE,
  GET_ALL,
}

const adminRepository = InstanceFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

const zodValidatorAdapter =
  InstanceFactory.createZodValidatorAdapter()

const bcryptAdapter = InstanceFactory.createBcryptAdapter()

const jsonWebTokenAdapter =
  InstanceFactory.createJsonWebTokenAdapter()

export class AdminModuleFactory {
  makeController(action: AdminModuleAction) {
    switch (action) {
      case AdminModuleAction.REGISTER:
        const adminRegisterUseCase = new AdminRegisterUseCase(
          adminRepository,
          bcryptAdapter,
          zodValidatorAdapter,
        )

        return new AdminRegisterController(adminRegisterUseCase)

      case AdminModuleAction.LOGIN:
        const adminLoginUseCase = new AdminLoginUseCase(
          adminRepository,
          bcryptAdapter,
          jsonWebTokenAdapter,
        )

        return new AdminLoginController(adminLoginUseCase)

      case AdminModuleAction.UPDATE:
        const adminUpdateUseCase = new AdminUpdateUseCase(
          adminRepository,
          bcryptAdapter,
          zodValidatorAdapter,
        )

        return new AdminUpdateController(adminUpdateUseCase)

      case AdminModuleAction.GET_PROFILE:
        const adminGetProfileUseCase = new AdminGetProfileUseCase(
          adminRepository,
        )

        return new AdminGetProfileController(adminGetProfileUseCase)

      case AdminModuleAction.GET_ALL:
        const adminGetAllUseCase = new AdminGetAllUseCase(
          adminRepository,
        )

        return new AdminGetAllController(adminGetAllUseCase)
    }
  }
}
