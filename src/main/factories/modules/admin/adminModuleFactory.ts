import { IAdminRepository } from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import {
  IEncrypter,
  IToken,
  IValidator,
} from '@/useCases/contracts/adapters'

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

const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator

const encrypterAdapter = ContainerFactory.createAdapter(
  Adapters.ENCRYPTER,
) as IEncrypter

const tokenAdapter = ContainerFactory.createAdapter(
  Adapters.TOKEN,
) as IToken

export class AdminModuleFactory {
  makeController(action: AdminModuleAction) {
    switch (action) {
      case AdminModuleAction.REGISTER:
        const adminRegisterUseCase = new AdminRegisterUseCase(
          adminRepository,
          encrypterAdapter,
          validatorAdapter,
        )

        return new AdminRegisterController(adminRegisterUseCase)

      case AdminModuleAction.LOGIN:
        const adminLoginUseCase = new AdminLoginUseCase(
          adminRepository,
          encrypterAdapter,
          tokenAdapter,
        )

        return new AdminLoginController(adminLoginUseCase)

      case AdminModuleAction.UPDATE:
        const adminUpdateUseCase = new AdminUpdateUseCase(
          adminRepository,
          encrypterAdapter,
          validatorAdapter,
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
