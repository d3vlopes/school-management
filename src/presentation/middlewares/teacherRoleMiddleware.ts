import { AccessDeniedError } from '@/presentation/errors'

import { IHttpResponse, IMiddleware } from '@/presentation/contracts'

import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '@/presentation/helpers'

import { ITeacherRepository } from '@/core/repositories'
import { IToken } from '@/useCases/contracts/adapters'

import { TOKEN_SECRET } from '@/config'

interface IRequest {
  accessToken: string
}

export class TeacherRoleMiddleware implements IMiddleware {
  constructor(
    private readonly teacherRepository: ITeacherRepository,
    private readonly token: IToken,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { accessToken } = request as IRequest

    let userId = ''

    if (accessToken) {
      try {
        userId = this.token.verify(accessToken, TOKEN_SECRET!)
      } catch {
        return badRequest(new Error('token expired'))
      }
    } else {
      return badRequest(new Error('Missing token'))
    }

    try {
      const teacherFound = await this.teacherRepository.findOne({
        id: userId,
      })

      if (teacherFound?.role === 'teacher') {
        return ok({})
      } else {
        return forbidden(
          new AccessDeniedError('Access denied, teacher only'),
        )
      }
    } catch {
      return serverError()
    }
  }
}
