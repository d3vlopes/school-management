import { AccessDeniedError } from '@/presentation/errors'

import { IHttpResponse, IMiddleware } from '@/presentation/contracts'

import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '@/presentation/helpers'

import { IAdminRepository } from '@/core/repositories'
import { IToken } from '@/useCases/contracts/adapters'

import { TOKEN_SECRET } from '@/config'

interface IRequest {
  accessToken: string
}

export class AdminRoleMiddleware implements IMiddleware {
  constructor(
    private readonly adminRepository: IAdminRepository,
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
    }

    try {
      const adminFound = await this.adminRepository.findOne({
        id: userId,
      })

      if (adminFound?.role === 'admin') {
        return ok({})
      } else {
        return forbidden(
          new AccessDeniedError('Access denied, admin only'),
        )
      }
    } catch {
      return serverError()
    }
  }
}
