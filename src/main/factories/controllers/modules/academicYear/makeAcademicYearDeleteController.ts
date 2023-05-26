import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

import { AcademicYearDeleteController } from '@/presentation/controllers/modules/academicYear'

import { AcademicYearDeleteUseCase } from '@/useCases/modules/academicYear'

export const makeAcademicYearDeleteController = () => {
  const academicYearRepository = new AcademicYearRepository()

  const academicYearDeleteUseCase = new AcademicYearDeleteUseCase(
    academicYearRepository,
  )
  const academicYearDeleteController =
    new AcademicYearDeleteController(academicYearDeleteUseCase)

  return academicYearDeleteController
}
