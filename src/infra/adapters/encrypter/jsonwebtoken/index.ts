import jwt from 'jsonwebtoken'

import {
  IToken,
  IVerifyResponse,
} from '@/useCases/contracts/adapters'

import { TOKEN_SECRET } from '@/config'

export class JsonWebTokenAdapter implements IToken {
  generateToken(payload: any, expired: string): string {
    return jwt.sign(payload, TOKEN_SECRET!, {
      expiresIn: expired,
    })
  }

  verify(token: string, secretKey: string): string {
    const user = jwt.verify(token, secretKey) as IVerifyResponse

    if (!user) throw new Error()

    return user.id
  }
}
