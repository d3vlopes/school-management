import { AcademicYearDeleteRequestDTO } from '@/core/dtos/academicYear'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  noContent,
  notFound,
  serverError,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

interface IRequest {
  params: {
    id: string
  }
  user: {
    id: string
  }
}

export class AcademicTermDeleteController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicYearDeleteRequestDTO,
      string
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { params, user } = request as IRequest

    try {
      const { error } = await this.useCase.execute({
        id: params.id,
        userId: user.id,
      })

      if (error) {
        return notFound(new Error(error))
      }

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
