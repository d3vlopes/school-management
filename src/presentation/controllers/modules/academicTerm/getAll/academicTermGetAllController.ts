import { AcademicTermModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import { ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { academicTermGetAllMapper } from './mappers'

export class AcademicTermGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<null, AcademicTermModel[]>,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const { data } = await this.useCase.execute()

      const dataMapper = academicTermGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
