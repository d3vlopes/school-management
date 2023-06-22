import { AcademicTermModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'
import { MissingParamError } from '@/presentation/errors'

import {
  badRequest,
  created,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'
import { AcademicTermCreateUseCaseData } from '@/useCases/modules/academicTerm'

import { IRequiredFields, requiredFields } from './validation'

import { IAcademicTermCreateController } from './interfaces'

import { academicTermCreateMapper } from './mappers'

export class AcademicTermCreateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      AcademicTermCreateUseCaseData,
      AcademicTermModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { user, ...body } = request as IAcademicTermCreateController

    const validationError: MissingParamError | undefined =
      validationRequiredFields<IRequiredFields>(
        body as any,
        requiredFields,
      )

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { data, error } = await this.useCase.execute({
        ...body,
        userId: user.id,
      })

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = academicTermCreateMapper.toDTO(data!)

      return created(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
