import { IHttpResponse } from '@/presentation/contracts'
import { ServerError } from '@/presentation/errors'

type ResponseMockType =
  | 'not-found'
  | 'exists-name'
  | 'server-error'
  | 'success'

export const responseMockFactory: Record<
  ResponseMockType,
  IHttpResponse
> = {
  'not-found': {
    statusCode: 400,
    body: new Error('Academic term not found'),
  },
  'exists-name': {
    statusCode: 400,
    body: new Error('Academic term already exists with that name'),
  },
  'server-error': {
    statusCode: 500,
    body: new ServerError(),
  },
  success: {
    statusCode: 200,
    body: {
      id: '123456',
      name: 'valid_academic_term_name',
      description: 'Loren ipsum dolor',
      duration: '3 mês',
      createdBy: 'admin_id',
      createdAt: new Date(23, 5),
    },
  },
}
