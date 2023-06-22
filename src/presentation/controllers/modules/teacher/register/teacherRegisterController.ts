import { TeacherRegisterRequestDTO } from '@/core/dtos/teacher'
import { TeacherModel } from '@/core/models'

import { MissingParamError } from '@/presentation/errors'
import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  created,
  serverError,
  validationRequiredFields,
} from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'

import { teacherRegisterMapper } from './mappers'

type RequiredFields = keyof TeacherRegisterRequestDTO

const requiredFields: RequiredFields[] = ['name', 'email', 'password']

export class TeacherRegisterController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      TeacherRegisterRequestDTO,
      TeacherModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const body = request as TeacherRegisterRequestDTO

    const validationError: MissingParamError | undefined =
      validationRequiredFields(body, requiredFields)

    if (validationError) {
      return badRequest(validationError)
    }

    try {
      const { data, error } = await this.useCase.execute(body)

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = teacherRegisterMapper.toDTO(data!)

      return created(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
