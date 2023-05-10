import { vitest, expect, it, describe } from 'vitest'

import { ZodValidatorAdapter } from '@/infra/adapters/validator/zod'

describe('ZodValidatorAdapter', () => {
  describe('isEmailValid', () => {
    it('should return false if email is invalid', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'invalid_email.com'

      const isEmailValid = sut.isEmail(input)

      expect(isEmailValid).toBe(false)
    })

    it('should return true if email is valid', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'valid_email@provider.com'

      const isEmailValid = sut.isEmail(input)

      expect(isEmailValid).toBe(true)
    })
  })

  describe('isLength', () => {
    it('should return false if input is less min value', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'Joh'

      const isLengthValid = sut.isLength(input, 4, 15)

      expect(isLengthValid).toBe(false)
    })

    it('should return false if input is than max value', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'John Doe'

      const isLengthValid = sut.isLength(input, 3, 5)

      expect(isLengthValid).toBe(false)
    })

    it('should return true if input is than min value', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'John'

      const isLengthValid = sut.isLength(input, 2, 4)

      expect(isLengthValid).toBe(true)
    })

    it('should return true if input is less max value', () => {
      const sut = new ZodValidatorAdapter()

      const input = 'John'

      const isLengthValid = sut.isLength(input, 3, 5)

      expect(isLengthValid).toBe(true)
    })
  })
})
