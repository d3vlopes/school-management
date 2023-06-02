import {
  IAcademicTermRepository,
  IAdminRepository,
} from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Repositories } from '@/main/factories/shared'

import {
  AcademicTermCreateController,
  AcademicTermGetAllController,
} from '@/presentation/controllers/modules/academicTerm'

import {
  AcademicTermCreateUseCase,
  AcademicTermGetAllUseCase,
} from '@/useCases/modules/academicTerm'

export enum AcademicTermModuleAction {
  CREATE,
  GET_ALL,
}

const academicTermRepository = ContainerFactory.createRepository(
  Repositories.ACADEMIC_TERM,
) as IAcademicTermRepository

const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

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

      case AcademicTermModuleAction.GET_ALL:
        const academicTermGetAllUseCase =
          new AcademicTermGetAllUseCase(academicTermRepository)

        return new AcademicTermGetAllController(
          academicTermGetAllUseCase,
        )
    }
  }
}
