import { adaptMiddleware } from '@/infra/adapters/http/express'
import { makeAuthMiddleware } from '@/main/factories/middlewares'

export const authMiddleware = adaptMiddleware(makeAuthMiddleware())
