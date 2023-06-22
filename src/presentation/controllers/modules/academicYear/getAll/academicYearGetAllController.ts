import { AcademicYearModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { academicYearGetAllMapper } from './mappers'

export class AcademicYearGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<null, AcademicYearModel[]>,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const { data } = await this.useCase.execute()

      const dataMapper = academicYearGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
