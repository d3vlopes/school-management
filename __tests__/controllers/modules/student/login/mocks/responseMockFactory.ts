import { IHttpResponse } from '@/presentation/contracts'
import { MissingParamError, ServerError } from '@/presentation/errors'

type ResponseMockType =
  | 'missing-email'
  | 'missing-password'
  | 'invalid-credentials'
  | 'server-error'
  | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'missing-email': {
    statusCode: 400,
    body: new MissingParamError('email'),
  },
  'missing-password': {
    statusCode: 400,
    body: new MissingParamError('password'),
  },
  'invalid-credentials': {
    statusCode: 400,
    body: new Error('Invalid login credentials'),
  },
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  success: {
    statusCode: 200,
    body: {
      token: 'generated_token',
    },
  },
}
