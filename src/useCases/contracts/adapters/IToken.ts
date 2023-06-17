export interface ITokenResponse {
  id: string
  role: string
}

export interface IToken {
  generateToken(payload: Record<string, unknown>): string
  verify(token: string, secretKey: string): ITokenResponse
}
