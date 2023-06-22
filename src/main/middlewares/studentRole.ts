import { adaptMiddleware } from '@/infra/adapters/http/express'

import { makeStudentRoleMiddleware } from '@/main/factories/middlewares'

export const studentRoleMiddleware = adaptMiddleware(
  makeStudentRoleMiddleware(),
)
