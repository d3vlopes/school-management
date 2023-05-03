import { IHttpResponse } from '@/presentation/contracts'

export interface IController {
  handle(request: Record<string, unknown>): Promise<IHttpResponse>
}
