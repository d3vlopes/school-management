import { vitest } from 'vitest'

export const errorMock = (stub: unknown, methodName: never) => {
  const spyOn = vitest
    .spyOn(stub, methodName)
    .mockRejectedValueOnce(new Error())

  return spyOn
}
