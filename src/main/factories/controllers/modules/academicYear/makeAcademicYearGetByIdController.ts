import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

import { AcademicYearGetByIdController } from '@/presentation/controllers/modules/academicYear'

import { AcademicYearGetByIdUseCase } from '@/useCases/modules/academicYear'

export const makeAcademicYearGetByIdController = () => {
  const academicYearRepository = new AcademicYearRepository()

  const academicYearGetByIdUseCase = new AcademicYearGetByIdUseCase(
    academicYearRepository,
  )
  const academicYearGetByIdController =
    new AcademicYearGetByIdController(academicYearGetByIdUseCase)

  return academicYearGetByIdController
}
