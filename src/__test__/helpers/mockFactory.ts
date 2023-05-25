import { errorMock } from '../mocks'

export const mockFactory = () => {
  return {
    errorMock: (stub: unknown, methodName: never) =>
      errorMock(stub, methodName),
  }
}
