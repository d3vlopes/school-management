export interface IHttpResponse {
  statusCode: number
  body: Record<string, unknown> | Error | null | any
}
