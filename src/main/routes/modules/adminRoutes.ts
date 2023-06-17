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
  '/admins/register',
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.REGISTER),
  ),
)

adminRoutes.post(
  '/admins/login',
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.LOGIN),
  ),
)

adminRoutes.get(
  '/admins/profile',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.GET_PROFILE),
  ),
)

adminRoutes.get(
  '/admins',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.GET_ALL),
  ),
)

adminRoutes.put(
  '/admins',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    adminModuleFactory.makeController(AdminModuleAction.UPDATE),
  ),
)
