import { AcademicTermModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { notFound, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { academicTermGetByIdMapper } from './mappers'

interface IRequest {
  params: {
    id: string
  }
}

export class AcademicTermGetByIdController implements IController {
  constructor(private useCase: IUseCase<string, AcademicTermModel>) {}

  async handle(request: IRequest): Promise<IHttpResponse> {
    try {
      const { data, error } = await this.useCase.execute(
        request.params.id,
      )

      if (error) {
        return notFound(new Error(error))
      }

      const dataMapper = academicTermGetByIdMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
