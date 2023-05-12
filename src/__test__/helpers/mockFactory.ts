import { mockError } from '../mocks'

export const mockFactory = () => {
  return {
    mockError: (stub: unknown, methodName: never) =>
      mockError(stub, methodName),
  }
}
