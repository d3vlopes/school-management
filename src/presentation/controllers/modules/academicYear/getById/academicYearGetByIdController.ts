import { AcademicYearModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import { MissingParamError } from '@/presentation/errors'

import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { academicYearGetByIdMapper } from './mappers'

interface IRequest {
  params: {
    id: string
  }
}

export class AcademicYearGetByIdController implements IController {
  constructor(
    private readonly useCase: IUseCase<string, AcademicYearModel>,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const {
      params: { id },
    } = request as IRequest

    try {
      const { data, error } = await this.useCase.execute(id)

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = academicYearGetByIdMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
