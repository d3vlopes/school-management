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

export default (router: Router): void => {
  router.post(
    '/admin/register',
    adaptRoute(
      adminModuleFactory.makeController(AdminModuleAction.REGISTER),
    ),
  )

  router.post(
    '/admin/login',
    adaptRoute(
      adminModuleFactory.makeController(AdminModuleAction.LOGIN),
    ),
  )

  router.get(
    '/admin/profile',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      adminModuleFactory.makeController(
        AdminModuleAction.GET_PROFILE,
      ),
    ),
  )

  router.get(
    '/admin',
    authMiddleware,
    adaptRoute(
      adminModuleFactory.makeController(AdminModuleAction.GET_ALL),
    ),
  )

  router.put(
    '/admin',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      adminModuleFactory.makeController(AdminModuleAction.UPDATE),
    ),
  )
}
