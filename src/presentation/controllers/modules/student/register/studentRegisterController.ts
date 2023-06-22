import { StudentModel } from '@/core/models'

import { StudentRegisterRequestDTO } from '@/core/dtos/student'

import { MissingParamError } from '@/presentation/errors'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  created,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { studentRegisterMapper } from './mappers'

type RequiredFields = keyof StudentRegisterRequestDTO

const requiredFields: RequiredFields[] = ['name', 'email', 'password']

export class StudentRegisterController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      StudentRegisterRequestDTO,
      StudentModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    try {
      const body = request as StudentRegisterRequestDTO

      const validationError: MissingParamError | undefined =
        validationRequiredFields(body, requiredFields)

      if (validationError) {
        return badRequest(validationError)
      }

      const { data, error } = await this.useCase.execute(body)

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = studentRegisterMapper.toDTO(data!)

      return created(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
