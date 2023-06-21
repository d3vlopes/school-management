import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  created,
  serverError,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { adminRegisterMapper } from './mappers'

import { validationRequiredFields } from './validations'

export class AdminRegisterController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AdminRegisterRequestDTO,
      AdminModel
    >,
  ) {}

  async handle(body: unknown): Promise<IHttpResponse> {
    const request = body as AdminRegisterRequestDTO

    try {
      const validationError = validationRequiredFields(request)

      if (validationError) {
        return badRequest(validationError)
      }

      const { data, error } = await this.useCase.execute(request)

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = adminRegisterMapper.toDTO(data!)

      return created(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
