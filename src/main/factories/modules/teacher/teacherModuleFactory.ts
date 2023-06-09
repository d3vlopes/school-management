import { ITeacherRepository } from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import { IEncrypter, IValidator } from '@/useCases/contracts/adapters'

import { TeacherRegisterUseCase } from '@/useCases/modules/teacher'

import { TeacherRegisterController } from '@/presentation/controllers/modules/teacher'

export enum TeacherModuleAction {
  REGISTER,
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
    }
  }
}
