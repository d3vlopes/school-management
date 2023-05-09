import { mockError } from '../mock'

export const mockFactory = () => {
  return {
    mockError: (stub: unknown, methodName: never) =>
      mockError(stub, methodName),
  }
}
