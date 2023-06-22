import { TeacherModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { notFound, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { teacherGetProfileMapper } from './mappers'

interface IRequest {
  user: {
    id: string
    role?: string
  }
}

export class TeacherGetProfileController implements IController {
  constructor(
    private readonly useCase: IUseCase<string, TeacherModel>,
  ) {}

  async handle({ user }: IRequest): Promise<IHttpResponse> {
    try {
      const { data, error } = await this.useCase.execute(user.id)

      if (error) {
        return notFound(new Error('Teacher not found'))
      }

      const dataMapper = teacherGetProfileMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
