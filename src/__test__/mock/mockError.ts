import { vitest } from 'vitest'

export const mockError = (stub: unknown, methodName: never) => {
  vitest.spyOn(stub, methodName).mockRejectedValueOnce(new Error())
}
