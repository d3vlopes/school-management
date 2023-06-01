import {
  IAcademicTermRepository,
  IAdminRepository,
} from '@/core/repositories'

import {
  InstanceFactory,
  Repositories,
} from '@/main/factories/shared'

import { AcademicTermCreateController } from '@/presentation/controllers/modules/academicTerm'

import { AcademicTermCreateUseCase } from '@/useCases/modules/academicTerm'

export enum AcademicTermModuleAction {
  CREATE,
}

const academicTermRepository = InstanceFactory.createRepository(
  Repositories.ACADEMIC_TERM,
) as IAcademicTermRepository

const adminRepository = InstanceFactory.createRepository(
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
    }
  }
}
