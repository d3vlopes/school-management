import { AccessDeniedError } from '@/presentation/errors'

import { IHttpResponse, IMiddleware } from '@/presentation/contracts'

import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '@/presentation/helpers'

import { IToken, ITokenResponse } from '@/useCases/contracts/adapters'

import { TOKEN_SECRET } from '@/config'

interface IRequest {
  accessToken: string
}

export class RoleMiddleware implements IMiddleware {
  constructor(
    private readonly token: IToken,
    private readonly resource: string,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const { accessToken } = request as IRequest

    let userInfo = {} as ITokenResponse

    if (accessToken) {
      try {
        const payload = this.token.verify(accessToken, TOKEN_SECRET!)

        userInfo = payload
      } catch {
        return badRequest(new Error('token expired'))
      }
    } else {
      return badRequest(new Error('Missing token'))
    }

    try {
      let isPermission = false

      const { role } = userInfo

      if (role === 'admin' || role === this.resource) {
        isPermission = true
      }

      if (isPermission) {
        return ok({})
      } else {
        return forbidden(new AccessDeniedError('Access denied'))
      }
    } catch {
      return serverError()
    }
  }
}
