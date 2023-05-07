export interface IVerifyResponse {
  id: string
}

export interface IToken {
  generateToken(payload: Record<string, unknown>): string
  verify(token: string, secretKey: string): string
}
