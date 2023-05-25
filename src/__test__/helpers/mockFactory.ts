import { IValidator } from '@/useCases/contracts/adapters'
import { IUseCase } from '@/useCases/contracts/shared'

import {
  errorMock,
  invalidLengthMock,
  invalidNumberMock,
  useCaseErrorMock,
  useCaseSuccessMock,
} from '../mocks'

export const mockFactory = () => {
  return {
    errorMock: (stub: unknown, methodName: never) =>
      errorMock(stub, methodName),
    invalidLengthMock: (stub: IValidator) => invalidLengthMock(stub),
    invalidNumberMock: (stub: IValidator) => invalidNumberMock(stub),
    useCaseErrorMock: (
      stub: IUseCase<unknown, unknown>,
      error: string,
    ) => useCaseErrorMock(stub, error),
    useCaseSuccessMock: (
      stub: IUseCase<unknown, unknown>,
      data: unknown,
    ) => useCaseSuccessMock(stub, data),
  }
}
