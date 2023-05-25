import { AdminUpdateRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { adminUpdateMapper } from './mappers'

type CommonRequestType = Omit<AdminUpdateRequestDTO, 'id'>

interface IRequest extends CommonRequestType {
  user: { id: string }
}

export class AdminUpdateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AdminUpdateRequestDTO,
      AdminModel
    >,
  ) {}

  async handle(body: unknown): Promise<IHttpResponse> {
    const { name, email, password, user } = body as IRequest

    try {
      const { data, error } = await this.useCase.execute({
        id: user.id,
        name,
        email,
        password,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = adminUpdateMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
