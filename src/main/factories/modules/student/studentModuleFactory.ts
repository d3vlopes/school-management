import { StudentRegisterUseCase } from '@/useCases/modules/student'

import { StudentRegisterController } from '@/presentation/controllers/modules/student'

import { StudentModuleAction } from './actions'

import {
  studentRepository,
  encrypterAdapter,
  validatorAdapter,
} from './container'

export class StudentModuleFactory {
  makeController(action: StudentModuleAction) {
    switch (action) {
      case StudentModuleAction.REGISTER:
        const studentRegisterUseCase = new StudentRegisterUseCase(
          studentRepository,
          validatorAdapter,
          encrypterAdapter,
        )

        return new StudentRegisterController(studentRegisterUseCase)
    }
  }
}
