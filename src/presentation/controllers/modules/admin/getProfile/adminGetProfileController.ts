import { AdminGetProfileRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { adminGetProfileMapper } from './mappers'

export class AdminGetProfileController implements IController {
  constructor(
    private readonly useCase: IUseCase<string, AdminModel>,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { user } = request as AdminGetProfileRequestDTO

    try {
      const { data, error } = await this.useCase.execute(user.id)

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = adminGetProfileMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
