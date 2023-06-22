import { TeacherModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { teacherGetAllMapper } from './mappers'

export class TeacherGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<null, TeacherModel[]>,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const { data } = await this.useCase.execute()

      const dataMapper = teacherGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
