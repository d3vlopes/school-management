import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'
import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

import { AcademicYearUpdateController } from '@/presentation/controllers/modules/academicYear'

import { AcademicYearUpdateUseCase } from '@/useCases/modules/academicYear'

export const makeAcademicYearUpdateController = () => {
  const zodValidatorAdapter = new ZodValidatorAdapter()
  const academicYearRepository = new AcademicYearRepository()

  const academicYearUpdateUseCase = new AcademicYearUpdateUseCase(
    zodValidatorAdapter,
    academicYearRepository,
  )
  const academicYearUpdateController =
    new AcademicYearUpdateController(academicYearUpdateUseCase)

  return academicYearUpdateController
}
