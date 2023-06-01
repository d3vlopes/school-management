import { InstanceFactory } from '@/main/factories/shared'

import { AcademicTermCreateController } from '@/presentation/controllers/modules/academicTerm'

import { AcademicTermCreateUseCase } from '@/useCases/modules/academicTerm'

export enum AcademicTermModuleAction {
  CREATE,
}

const academicTermRepository =
  InstanceFactory.createAcademicTermRepository()

const adminRepository = InstanceFactory.createAdminRepository()

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
