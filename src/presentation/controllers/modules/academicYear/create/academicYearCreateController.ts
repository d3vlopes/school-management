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

import { academicYearCreateMapper } from './mappers'

type IRequiredFields = keyof AcademicYearCreateRequestDTO

const requiredFields: IRequiredFields[] = [
  'name',
  'createdBy',
  'year',
]

export class AcademicYearCreateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicYearCreateRequestDTO,
      AcademicYearModel
    >,
  ) {}

  async handle(body: unknown): Promise<IHttpResponse> {
    const request = body as AcademicYearCreateRequestDTO

    const validationError: MissingParamError | undefined =
      validationRequiredFields<IRequiredFields>(
        request as any,
        requiredFields,
      )

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { data, error } = await this.useCase.execute(request)

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
