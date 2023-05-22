import { IValidator } from '@/useCases/contracts/adapters'

export class ValidatorStub implements IValidator {
  isEmail(value: string): boolean {
    return true
  }

  isLength(value: string, min: number, max: number): boolean {
    return true
  }

  isNumber(value: number, min: number, max: number): boolean {
    return true
  }
}

export const validatorStub = new ValidatorStub()
