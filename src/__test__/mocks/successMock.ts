import { vitest } from 'vitest'

export const successMock = (
  stub: unknown,
  methodName: never,
  data: Record<string, unknown>,
) => {
  vitest.spyOn(stub, methodName).mockResolvedValueOnce({
    data,
    error: null,
  })
}
