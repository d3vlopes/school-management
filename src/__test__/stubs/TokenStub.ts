import { IToken } from '@/useCases/contracts/adapters'

class TokenStub implements IToken {
  generateToken(payload: any): string {
    return 'generated_token'
  }

  verify(token: string, secretKey: string): string {
    return 'user_id'
  }
}

export const tokenStub = new TokenStub()
