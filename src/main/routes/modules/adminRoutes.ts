import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  AdminModuleFactory,
  AdminModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const adminModuleFactory = new AdminModuleFactory()

export const adminRoutes = Router()

adminRoutes.post(
  '/admin/register',
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.REGISTER),
  ),
)

adminRoutes.post(
  '/admin/login',
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.LOGIN),
  ),
)

adminRoutes.get(
  '/admin/profile',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.GET_PROFILE),
  ),
)

adminRoutes.get(
  '/admin',
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.GET_ALL),
  ),
)

adminRoutes.put(
  '/admin',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.UPDATE),
  ),
)
