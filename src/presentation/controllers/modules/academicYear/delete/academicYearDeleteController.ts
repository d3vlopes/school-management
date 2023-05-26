import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  serverError,
  noContent,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

interface IRequest {
  params: {
    id: string
  }
}

export class AcademicYearDeleteController implements IController {
  constructor(private readonly useCase: IUseCase<string, string>) {}

  async handle(request: IRequest): Promise<IHttpResponse> {
    try {
      const { error } = await this.useCase.execute(request.params.id)

      if (error) {
        return badRequest(new Error(error))
      }

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
