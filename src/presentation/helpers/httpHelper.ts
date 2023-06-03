import { ServerError } from '@/presentation/errors'

import { IHttpResponse } from '@/presentation/contracts'

export const badRequest = (error: Error): IHttpResponse => {
  return {
    statusCode: 400,
    body: error,
  }
}

export const notFound = (error: Error): IHttpResponse => {
  return {
    statusCode: 404,
    body: error,
  }
}

export const ok = (
  data: Record<string, unknown> | any,
): IHttpResponse => ({
  statusCode: 200,
  body: data,
})

export const created = (
  data: Record<string, unknown>,
): IHttpResponse => ({
  statusCode: 201,
  body: data,
})

export const serverError = (message?: string): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(message),
})

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  body: error,
})

export const noContent = (): IHttpResponse => ({
  statusCode: 204,
  body: null,
})
