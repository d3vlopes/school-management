export interface IVerifyResponse {
  id: string
}

export interface IToken {
  generateToken(
    payload: Record<string, unknown>,
    expired: string,
  ): string
  verify(token: string, secretKey: string): string
}
