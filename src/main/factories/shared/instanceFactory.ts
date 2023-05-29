import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'
import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

export class InstanceFactory {
  static createZodValidatorAdapter() {
    return new ZodValidatorAdapter()
  }

  static createAcademicYearRepository() {
    return new AcademicYearRepository()
  }
}
