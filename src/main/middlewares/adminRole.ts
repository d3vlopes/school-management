import { adaptMiddleware } from '@/infra/adapters/http/express'

import { makeAdminRoleMiddleware } from '@/main/factories/middlewares'

export const adminRoleMiddleware = adaptMiddleware(
  makeAdminRoleMiddleware(),
)
