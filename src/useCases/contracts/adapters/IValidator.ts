export interface IValidator {
  isEmail(value: string): boolean
  isLength(value: string, min: number, max: number): boolean
}
