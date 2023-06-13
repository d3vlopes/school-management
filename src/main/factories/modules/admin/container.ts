import { IAdminRepository } from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import {
  IEncrypter,
  IToken,
  IValidator,
} from '@/useCases/contracts/adapters'

export const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

export const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator

export const encrypterAdapter = ContainerFactory.createAdapter(
  Adapters.ENCRYPTER,
) as IEncrypter

export const tokenAdapter = ContainerFactory.createAdapter(
  Adapters.TOKEN,
) as IToken
