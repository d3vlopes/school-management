import { StudentModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { notFound, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { studentGetByIdMapper } from './mappers'

interface IRequest {
  params: {
    id: string
  }
}

export class StudentGetByIdController implements IController {
  constructor(
    private readonly useCase: IUseCase<string, StudentModel>,
  ) {}

  async handle({ params }: IRequest): Promise<IHttpResponse> {
    try {
      const { data, error } = await this.useCase.execute(params.id)

      if (error) {
        return notFound(new Error(error))
      }

      const dataMapper = studentGetByIdMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
