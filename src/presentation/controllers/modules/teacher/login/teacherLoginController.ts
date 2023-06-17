import { IController, IHttpResponse } from '@/presentation/contracts'
import { TeacherLoginRequestDTO } from '@/core/dtos/teacher'

import { MissingParamError } from '@/presentation/errors'

import {
  badRequest,
  ok,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

type IRequiredFields = keyof TeacherLoginRequestDTO

const requiredFields: IRequiredFields[] = ['email', 'password']

export class TeacherLoginController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      TeacherLoginRequestDTO,
      string
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const body = request as TeacherLoginRequestDTO

    const validationError: MissingParamError | undefined =
      validationRequiredFields<IRequiredFields>(
        body as any,
        requiredFields,
      )

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { data, error } = await this.useCase.execute(body)

      if (error) {
        return badRequest(new Error(error))
      }

      return ok({ token: data })
    } catch (error) {
      return serverError()
    }
  }
}
