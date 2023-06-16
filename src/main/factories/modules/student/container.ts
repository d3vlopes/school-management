import { IStudentRepository } from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import {
  IEncrypter,
  IToken,
  IValidator,
} from '@/useCases/contracts/adapters'

export const studentRepository = ContainerFactory.createRepository(
  Repositories.STUDENT,
) as IStudentRepository

export const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator

export const encrypterAdapter = ContainerFactory.createAdapter(
  Adapters.ENCRYPTER,
) as IEncrypter

export const tokenAdapter = ContainerFactory.createAdapter(
  Adapters.TOKEN,
) as IToken
