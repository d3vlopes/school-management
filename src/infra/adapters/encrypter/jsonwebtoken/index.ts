import jwt from 'jsonwebtoken'

import { IToken, ITokenResponse } from '@/useCases/contracts/adapters'

import { TOKEN_SECRET } from '@/config'

export class JsonWebTokenAdapter implements IToken {
  generateToken(payload: Record<string, unknown>): string {
    return jwt.sign(payload, TOKEN_SECRET!, {
      expiresIn: '5d',
    })
  }

  verify(token: string, secretKey: string): ITokenResponse {
    const userInfo = jwt.verify(token, secretKey) as ITokenResponse

    if (!userInfo) throw new Error()

    return {
      id: userInfo.id,
      role: userInfo.role,
    }
  }
}
