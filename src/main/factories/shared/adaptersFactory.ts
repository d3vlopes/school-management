import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'

export enum Adapters {
  VALIDATOR,
  ENCRYPTER,
  TOKEN,
}

export class AdaptersFactory {
  static make(adapter: Adapters) {
    switch (adapter) {
      case Adapters.VALIDATOR:
        return new ZodValidatorAdapter()

      case Adapters.ENCRYPTER:
        return new BcryptAdapter()

      case Adapters.TOKEN:
        return new JsonWebTokenAdapter()
    }
  }
}
