import { it, describe, expect } from 'vitest'

describe('Sample', () => {
  it('should sum correct', () => {
    const a = 1
    const b = 2

    const total = a + b

    expect(total).toBe(3)
  })
})
