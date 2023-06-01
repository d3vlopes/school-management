import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'

import {
  Repositories,
  RepositoriesFactory,
} from './repositoriesFactory'

export class InstanceFactory {
  static createRepository(repository: Repositories) {
    return RepositoriesFactory.make(repository)
  }

  static createZodValidatorAdapter() {
    return new ZodValidatorAdapter()
  }

  static createBcryptAdapter() {
    return new BcryptAdapter()
  }

  static createJsonWebTokenAdapter() {
    return new JsonWebTokenAdapter()
  }
}
