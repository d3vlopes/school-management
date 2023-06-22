import {
  TeacherRegisterUseCase,
  TeacherLoginUseCase,
  TeacherGetAllUseCase,
  TeacherGetByIdUseCase,
  TeacherGetProfileUseCase,
  TeacherUpdateUseCase,
} from '@/useCases/modules/teacher'

import {
  TeacherRegisterController,
  TeacherLoginController,
  TeacherGetAllController,
  TeacherGetByIdController,
  TeacherGetProfileController,
  TeacherUpdateController,
} from '@/presentation/controllers/modules/teacher'

import { TeacherModuleAction } from './actions'

import {
  teacherRepository,
  encrypterAdapter,
  tokenAdapter,
  validatorAdapter,
} from './container'

export class TeacherModuleFactory {
  makeController(action: TeacherModuleAction) {
    switch (action) {
      case TeacherModuleAction.REGISTER:
        const teacherRegisterUseCase = new TeacherRegisterUseCase(
          teacherRepository,
          validatorAdapter,
          encrypterAdapter,
        )

        return new TeacherRegisterController(teacherRegisterUseCase)

      case TeacherModuleAction.LOGIN:
        const teacherLoginUseCase = new TeacherLoginUseCase(
          teacherRepository,
          encrypterAdapter,
          tokenAdapter,
        )

        return new TeacherLoginController(teacherLoginUseCase)

      case TeacherModuleAction.GET_ALL:
        const teacherGetAllUseCase = new TeacherGetAllUseCase(
          teacherRepository,
        )

        return new TeacherGetAllController(teacherGetAllUseCase)

      case TeacherModuleAction.GET_BY_ID:
        const teacherGetByIdUseCase = new TeacherGetByIdUseCase(
          teacherRepository,
        )

        return new TeacherGetByIdController(teacherGetByIdUseCase)

      case TeacherModuleAction.GET_PROFILE:
        const teacherGetProfileUseCase = new TeacherGetProfileUseCase(
          teacherRepository,
        )

        return new TeacherGetProfileController(
          teacherGetProfileUseCase,
        )

      case TeacherModuleAction.UPDATE:
        const teacherUpdateUseCase = new TeacherUpdateUseCase(
          teacherRepository,
          validatorAdapter,
          encrypterAdapter,
        )

        return new TeacherUpdateController(teacherUpdateUseCase)
    }
  }
}
