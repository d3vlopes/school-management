import { z } from 'zod'

import { IValidator } from '@/useCases/contracts/adapters'

export class ZodValidatorAdapter implements IValidator {
  isEmail(value: string): boolean {
    const schema = z.string().email()

    const { success } = schema.safeParse(value)

    return success
  }

  isLength(value: string, min: number, max: number): boolean {
    const schema = z.string().min(min).max(max)

    const { success } = schema.safeParse(value)

    return success
  }

  isNumber(value: number, min: number, max: number): boolean {
    const schema = z.number().min(min).max(max)

    const { success } = schema.safeParse(value)

    return success
  }
}
