import {
  StudentRegisterUseCase,
  StudentLoginUseCase,
  StudentGetAllUseCase,
} from '@/useCases/modules/student'

import {
  StudentRegisterController,
  StudentLoginController,
  StudentGetAllController,
} from '@/presentation/controllers/modules/student'

import { StudentModuleAction } from './actions'

import {
  studentRepository,
  encrypterAdapter,
  validatorAdapter,
  tokenAdapter,
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

      case StudentModuleAction.LOGIN:
        const studentLoginUseCase = new StudentLoginUseCase(
          studentRepository,
          encrypterAdapter,
          tokenAdapter,
        )

        return new StudentLoginController(studentLoginUseCase)

      case StudentModuleAction.GET_ALL:
        const studentGetAllUseCase = new StudentGetAllUseCase(
          studentRepository,
        )

        return new StudentGetAllController(studentGetAllUseCase)
    }
  }
}
