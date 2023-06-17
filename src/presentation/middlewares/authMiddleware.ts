import { AccessDeniedError } from '@/presentation/errors'

import { IToken } from '@/useCases/contracts/adapters'

import { IHttpResponse, IMiddleware } from '@/presentation/contracts'

import { badRequest, forbidden, ok } from '@/presentation/helpers'

import { TOKEN_SECRET } from '@/config'

export class AuthMiddleware implements IMiddleware {
  constructor(private readonly token: IToken) {}

  async handle(request: any): Promise<IHttpResponse> {
    const { accessToken } = request

    if (accessToken) {
      try {
        const payload = this.token.verify(accessToken, TOKEN_SECRET!)

        return ok(payload)
      } catch {
        return badRequest(new Error('token expired'))
      }
    }

    return forbidden(new AccessDeniedError())
  }
}
