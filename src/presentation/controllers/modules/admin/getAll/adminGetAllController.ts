import { AdminModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { adminGetAllMapper } from './mappers'

export class AdminGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<null, AdminModel[]>,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const { data } = await this.useCase.execute()

      const dataMapper = adminGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
