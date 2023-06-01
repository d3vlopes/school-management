import { InstanceFactory } from '@/main/factories/shared'

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

export enum AcademicYearModuleAction {
  CREATE,
  DELETE,
  UPDATE,
  GET_ALL,
  GET_BY_ID,
}

const academicYearRepository =
  InstanceFactory.createAcademicYearRepository()

const adminRepository = InstanceFactory.createAdminRepository()

const zodValidatorAdapter =
  InstanceFactory.createZodValidatorAdapter()

export class AcademicYearModuleFactory {
  makeController(action: AcademicYearModuleAction) {
    switch (action) {
      case AcademicYearModuleAction.CREATE:
        const academicYearCreateUseCase =
          new AcademicYearCreateUseCase(
            academicYearRepository,
            zodValidatorAdapter,
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
            zodValidatorAdapter,
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
