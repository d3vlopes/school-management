import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  created,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { MissingParamError } from '@/presentation/errors'

import { IUseCase } from '@/useCases/contracts/shared'

import { AcademicYearCreateUseCaseData } from '@/useCases/modules/academicYear'

import { academicYearCreateMapper } from './mappers'

type IRequiredFields = keyof AcademicYearCreateRequestDTO

const requiredFields: IRequiredFields[] = ['name', 'year']

export interface IAcademicYearCreateController
  extends AcademicYearCreateRequestDTO {
  user: {
    id: string
  }
}

export class AcademicYearCreateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicYearCreateUseCaseData,
      AcademicYearModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { name, year, user } =
      request as IAcademicYearCreateController

    const validationError: MissingParamError | undefined =
      validationRequiredFields<IRequiredFields>(
        { name, year } as any,
        requiredFields,
      )

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { data, error } = await this.useCase.execute({
        name,
        year,
        userId: user.id,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = academicYearCreateMapper.toDTO(data!)

      return created(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
