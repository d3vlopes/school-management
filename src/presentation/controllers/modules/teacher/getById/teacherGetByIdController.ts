import { TeacherModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { notFound, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { teacherGetByIdMapper } from './mappers'

interface IRequest {
  params: {
    id: string
  }
}

export class TeacherGetByIdController implements IController {
  constructor(
    private readonly useCase: IUseCase<string, TeacherModel>,
  ) {}

  async handle(request: IRequest): Promise<IHttpResponse> {
    try {
      const { data, error } = await this.useCase.execute(
        request.params.id,
      )

      if (error) {
        return notFound(new Error(error))
      }

      const dataMapper = teacherGetByIdMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
