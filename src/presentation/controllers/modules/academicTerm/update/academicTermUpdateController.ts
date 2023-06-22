import { AcademicTermUpdateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'
import { AcademicTermUpdateUseCaseData } from '@/useCases/modules/academicTerm'

import { academicTermUpdatedMapper } from './mappers'

export interface IAcademicTermUpdateControllerRequest
  extends AcademicTermUpdateRequestDTO {
  params: {
    id: string
  }
}

export class AcademicTermUpdateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicTermUpdateUseCaseData,
      AcademicTermModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { params, name, duration, description } =
      request as IAcademicTermUpdateControllerRequest

    try {
      const { data, error } = await this.useCase.execute({
        id: params.id,
        name,
        duration,
        description,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = academicTermUpdatedMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
