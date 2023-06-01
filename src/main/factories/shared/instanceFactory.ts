import { BcryptAdapter } from '@/infra/adapters/encrypter/bcrypt'
import { JsonWebTokenAdapter } from '@/infra/adapters/encrypter/jsonwebtoken'
import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'

import {
  AcademicYearRepository,
  AdminRepository,
  AcademicTermRepository,
} from '@/infra/database/mongoDB/repositories'

export class InstanceFactory {
  static createAdminRepository() {
    return new AdminRepository()
  }

  static createAcademicYearRepository() {
    return new AcademicYearRepository()
  }

  static createAcademicTermRepository() {
    return new AcademicTermRepository()
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
