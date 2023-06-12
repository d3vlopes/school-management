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
} from '@/useCases/modules/teacher'

import {
  TeacherRegisterController,
  TeacherLoginController,
} from '@/presentation/controllers/modules/teacher'

export enum TeacherModuleAction {
  REGISTER,
  LOGIN,
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
    }
  }
}
