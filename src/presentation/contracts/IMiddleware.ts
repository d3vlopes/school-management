import { IHttpResponse } from './IHttpResponse'

export interface IMiddleware {
  handle: (request: unknown) => Promise<IHttpResponse>
}
