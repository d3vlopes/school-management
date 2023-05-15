export interface IMapper<T, U> {
  toDTO(model: T | T[]): U | U[]
}
