import { AcademicYearModel } from '@/core/models'
import { AcademicYearUpdateRequestDTO } from '@/core/dtos/academicYear'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'
import { AcademicYearUpdateUseCaseData } from '@/useCases/modules/academicYear'

import { academicYearUpdatedMapper } from './mappers'

type CommonRequestType = AcademicYearUpdateRequestDTO

export interface IAcademicYearUpdateControllerRequest
  extends CommonRequestType {
  params: {
    id: string
  }
  user: {
    id: string
  }
}

export class AcademicYearUpdateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicYearUpdateUseCaseData,
      AcademicYearModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { params, user, name, isCurrent, year } =
      request as IAcademicYearUpdateControllerRequest

    try {
      const { data, error } = await this.useCase.execute({
        id: params.id,
        userId: user.id,
        name,
        year,
        isCurrent,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = academicYearUpdatedMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
