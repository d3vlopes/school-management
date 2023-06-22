export class AccessDeniedError extends Error {
  constructor(message?: string) {
    super(message ?? 'Access denied')
    this.name = 'AccessDeniedError'
  }
}
