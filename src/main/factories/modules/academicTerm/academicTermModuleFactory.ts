import {
  AcademicTermCreateController,
  AcademicTermUpdateController,
  AcademicTermDeleteController,
  AcademicTermGetAllController,
  AcademicTermGetByIdController,
} from '@/presentation/controllers/modules/academicTerm'

import {
  AcademicTermCreateUseCase,
  AcademicTermUpdateUseCase,
  AcademicTermDeleteUseCase,
  AcademicTermGetAllUseCase,
  AcademicTermGetByIdUseCase,
} from '@/useCases/modules/academicTerm'

import { AcademicTermModuleAction } from './actions'

import { academicTermRepository, adminRepository } from './container'

export class AcademicTermModuleFactory {
  makeController(action: AcademicTermModuleAction) {
    switch (action) {
      case AcademicTermModuleAction.CREATE:
        const academicTermCreateUseCase =
          new AcademicTermCreateUseCase(
            academicTermRepository,
            adminRepository,
          )

        return new AcademicTermCreateController(
          academicTermCreateUseCase,
        )

      case AcademicTermModuleAction.UPDATE:
        const academicTermUpdateUseCase =
          new AcademicTermUpdateUseCase(academicTermRepository)

        return new AcademicTermUpdateController(
          academicTermUpdateUseCase,
        )

      case AcademicTermModuleAction.DELETE:
        const academicTermDeleteUseCase =
          new AcademicTermDeleteUseCase(
            academicTermRepository,
            adminRepository,
          )

        return new AcademicTermDeleteController(
          academicTermDeleteUseCase,
        )

      case AcademicTermModuleAction.GET_ALL:
        const academicTermGetAllUseCase =
          new AcademicTermGetAllUseCase(academicTermRepository)

        return new AcademicTermGetAllController(
          academicTermGetAllUseCase,
        )

      case AcademicTermModuleAction.GET_BY_ID:
        const academicTermGetByIdUseCase =
          new AcademicTermGetByIdUseCase(academicTermRepository)

        return new AcademicTermGetByIdController(
          academicTermGetByIdUseCase,
        )
    }
  }
}
