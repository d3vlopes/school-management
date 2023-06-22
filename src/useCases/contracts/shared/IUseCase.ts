export interface IUseCaseResponse<T> {
  data?: T | null
  error?: string | null
}

export interface IUseCase<T, U> {
  execute(data?: T): Promise<IUseCaseResponse<U | null>>
}
