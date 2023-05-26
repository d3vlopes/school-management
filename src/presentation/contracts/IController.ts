import { IHttpResponse } from '@/presentation/contracts'

export interface IController<T = unknown> {
  handle(request: T): Promise<IHttpResponse>
}
