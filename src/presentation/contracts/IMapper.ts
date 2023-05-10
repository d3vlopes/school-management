export interface IMapper<T, U> {
  toDTO(model: T): U
}
