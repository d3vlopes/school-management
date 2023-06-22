import { IToken, ITokenResponse } from '@/useCases/contracts/adapters'

class TokenStub implements IToken {
  generateToken(payload: any): string {
    return 'generated_token'
  }

  verify(token: string, secretKey: string): ITokenResponse {
    return {
      id: 'user_id',
      role: 'role',
    }
  }
}

export const tokenStub = new TokenStub()
