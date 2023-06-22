export interface IValidator {
  isEmail(value: string): boolean
  isLength(value: string, min: number, max: number): boolean
  isNumber(value: number, min: number, max: number): boolean
}
