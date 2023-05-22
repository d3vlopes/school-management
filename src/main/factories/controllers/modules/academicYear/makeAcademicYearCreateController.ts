import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'
import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

import { AcademicYearCreateController } from '@/presentation/controllers/modules/academicYear'

import { AcademicYearCreateUseCase } from '@/useCases/modules/academicYear'

export const makeAcademicYearCreateController = () => {
  const academicYearRepository = new AcademicYearRepository()
  const zodValidatorAdapter = new ZodValidatorAdapter()

  const academicYearCreateUseCase = new AcademicYearCreateUseCase(
    academicYearRepository,
    zodValidatorAdapter,
  )
  const academicYearCreateController =
    new AcademicYearCreateController(academicYearCreateUseCase)

  return academicYearCreateController
}
