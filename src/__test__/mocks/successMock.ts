import { vitest } from 'vitest'

export const successMock = (
  stub: unknown,
  methodName: never,
  data: unknown,
) => {
  const spyOn = vitest.spyOn(stub, methodName).mockResolvedValueOnce({
    data,
    error: null,
  })

  return spyOn
}
