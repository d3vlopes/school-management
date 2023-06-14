import { TeacherUpdateRequestDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { teacherUpdateMapper } from './mappers'

interface IRequest extends Omit<TeacherUpdateRequestDTO, 'id'> {
  user: { id: string }
}

export class TeacherUpdateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      TeacherUpdateRequestDTO,
      TeacherModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    try {
      const { user, ...body } = request as IRequest

      if (!body.email && !body.name && !body.password) {
        return badRequest(new Error('Missing body values'))
      }

      const { data, error } = await this.useCase.execute({
        id: user.id,
        ...body,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = teacherUpdateMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
