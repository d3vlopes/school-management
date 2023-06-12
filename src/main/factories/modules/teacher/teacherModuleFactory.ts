import { ITeacherRepository } from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import {
  IEncrypter,
  IToken,
  IValidator,
} from '@/useCases/contracts/adapters'

import {
  TeacherRegisterUseCase,
  TeacherLoginUseCase,
  TeacherGetAllUseCase,
  TeacherGetByIdUseCase,
} from '@/useCases/modules/teacher'

import {
  TeacherRegisterController,
  TeacherLoginController,
  TeacherGetAllController,
  TeacherGetByIdController,
} from '@/presentation/controllers/modules/teacher'

export enum TeacherModuleAction {
  REGISTER,
  LOGIN,
  GET_ALL,
  GET_BY_ID,
}

const teacherRepository = ContainerFactory.createRepository(
  Repositories.TEACHER,
) as ITeacherRepository

const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator

const encrypterAdapter = ContainerFactory.createAdapter(
  Adapters.ENCRYPTER,
) as IEncrypter

const tokenAdapter = ContainerFactory.createAdapter(
  Adapters.TOKEN,
) as IToken

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
    }
  }
}
