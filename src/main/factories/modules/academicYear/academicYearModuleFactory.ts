import {
  AcademicYearCreateUseCase,
  AcademicYearDeleteUseCase,
  AcademicYearGetAllUseCase,
  AcademicYearGetByIdUseCase,
  AcademicYearUpdateUseCase,
} from '@/useCases/modules/academicYear'

import {
  AcademicYearCreateController,
  AcademicYearDeleteController,
  AcademicYearGetAllController,
  AcademicYearGetByIdController,
  AcademicYearUpdateController,
} from '@/presentation/controllers/modules/academicYear'

import { AcademicYearModuleAction } from './actions'

import {
  academicYearRepository,
  adminRepository,
  validatorAdapter,
} from './container'

export class AcademicYearModuleFactory {
  makeController(action: AcademicYearModuleAction) {
    switch (action) {
      case AcademicYearModuleAction.CREATE:
        const academicYearCreateUseCase =
          new AcademicYearCreateUseCase(
            academicYearRepository,
            validatorAdapter,
            adminRepository,
          )

        return new AcademicYearCreateController(
          academicYearCreateUseCase,
        )

      case AcademicYearModuleAction.DELETE:
        const academicYearDeleteUseCase =
          new AcademicYearDeleteUseCase(
            academicYearRepository,
            adminRepository,
          )

        return new AcademicYearDeleteController(
          academicYearDeleteUseCase,
        )

      case AcademicYearModuleAction.UPDATE:
        const academicYearUpdateUseCase =
          new AcademicYearUpdateUseCase(
            validatorAdapter,
            academicYearRepository,
          )

        return new AcademicYearUpdateController(
          academicYearUpdateUseCase,
        )

      case AcademicYearModuleAction.GET_ALL:
        const academicYearGetAllUseCase =
          new AcademicYearGetAllUseCase(academicYearRepository)

        return new AcademicYearGetAllController(
          academicYearGetAllUseCase,
        )

      case AcademicYearModuleAction.GET_BY_ID:
        const academicYearGetByIdUseCase =
          new AcademicYearGetByIdUseCase(academicYearRepository)

        return new AcademicYearGetByIdController(
          academicYearGetByIdUseCase,
        )
    }
  }
}
