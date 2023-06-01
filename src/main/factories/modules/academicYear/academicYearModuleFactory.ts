import {
  IAcademicYearRepository,
  IAdminRepository,
} from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

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
import { IValidator } from '@/useCases/contracts/adapters'

export enum AcademicYearModuleAction {
  CREATE,
  DELETE,
  UPDATE,
  GET_ALL,
  GET_BY_ID,
}

const academicYearRepository = ContainerFactory.createRepository(
  Repositories.ACADEMIC_YEAR,
) as IAcademicYearRepository

const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator

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
