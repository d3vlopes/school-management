import { adaptMiddleware } from '@/infra/adapters/http/express'

import { makeTeacherRoleMiddleware } from '@/main/factories/middlewares'

export const teacherRoleMiddleware = adaptMiddleware(
  makeTeacherRoleMiddleware(),
)
