import { AcademicYearRepository } from '@/infra/database/mongoDB/repositories'

import { AcademicYearGetAllController } from '@/presentation/controllers/modules/academicYear'

import { AcademicYearGetAllUseCase } from '@/useCases/modules/academicYear'

export const makeAcademicYearGetAllController = () => {
  const academicYearRepository = new AcademicYearRepository()

  const academicYearGetAllUseCase = new AcademicYearGetAllUseCase(
    academicYearRepository,
  )
  const academicYearGetAllController =
    new AcademicYearGetAllController(academicYearGetAllUseCase)

  return academicYearGetAllController
}
