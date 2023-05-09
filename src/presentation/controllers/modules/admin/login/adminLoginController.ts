import { AdminLoginRequestDTO } from '@/core/dtos/admin'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  ok,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

type IRequiredFields = keyof AdminLoginRequestDTO

const requiredFields: IRequiredFields[] = ['email', 'password']

export class AdminLoginController implements IController {
  constructor(
    private readonly useCase: IUseCase<AdminLoginRequestDTO, string>,
  ) {}

  async handle(body: unknown): Promise<IHttpResponse> {
    const request = body as AdminLoginRequestDTO

    const validationError = validationRequiredFields<IRequiredFields>(
      request as any,
      requiredFields,
    )

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { error, data } = await this.useCase.execute(request)

      if (error) {
        return badRequest(new Error(error))
      }

      return ok({ token: data })
    } catch {
      return serverError()
    }
  }
}
