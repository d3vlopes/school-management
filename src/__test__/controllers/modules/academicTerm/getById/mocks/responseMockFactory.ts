import { IHttpResponse } from '@/presentation/contracts'
import { ServerError } from '@/presentation/errors'

type ResponseMockType = 'not-found' | 'server-error' | 'ok'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'not-found': {
    statusCode: 404,
    body: new Error('Academic term not found'),
  },
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  ok: {
    statusCode: 200,
    body: {
      id: '123456',
      name: 'Academic Term',
      description: 'Loren ipsum dolor',
      duration: '3 mês',
      createdBy: 'admin_id',
      createdAt: new Date(23, 5),
    },
  },
}
