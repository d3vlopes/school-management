import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

export class UseCaseStub<T, U> implements IUseCase<T, U> {
  async execute(): Promise<IUseCaseResponse<U | null>> {
    return {
      data: null,
      error: null,
    }
  }
}
