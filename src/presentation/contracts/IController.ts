import { IHttpResponse } from '@/presentation/contracts'

export interface IController<T = Record<string, unknown>> {
  handle(request: T): Promise<IHttpResponse>
}
