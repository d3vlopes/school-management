import { StudentLoginRequestDTO } from '@/core/dtos/student'

import { MissingParamError } from '@/presentation/errors'
import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  ok,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

type IRequiredFields = keyof StudentLoginRequestDTO

const requiredFields: IRequiredFields[] = ['email', 'password']

export class StudentLoginController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      StudentLoginRequestDTO,
      string
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    try {
      const body = request as StudentLoginRequestDTO

      const validationError: MissingParamError | undefined =
        validationRequiredFields<IRequiredFields>(
          body as any,
          requiredFields,
        )

      if (validationError) {
        return badRequest(validationError)
      }

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
