import { StudentModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import { ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { studentGetAllMapper } from './mappers'

export class StudentGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<null, StudentModel[]>,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const { data } = await this.useCase.execute()

      const dataMapper = studentGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
