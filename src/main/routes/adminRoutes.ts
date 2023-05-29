import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  AdminControllerFactory,
  AdminControllerAction,
} from '@/main/factories/controllers/modules/admin'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const controllerFactory = new AdminControllerFactory()

export default (router: Router): void => {
  router.post(
    '/admin/register',
    adaptRoute(
      controllerFactory.makeController(
        AdminControllerAction.REGISTER,
      ),
    ),
  )

  router.post(
    '/admin/login',
    adaptRoute(
      controllerFactory.makeController(AdminControllerAction.LOGIN),
    ),
  )

  router.get(
    '/admin/profile',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AdminControllerAction.GET_PROFILE,
      ),
    ),
  )

  router.get(
    '/admin',
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(AdminControllerAction.GET_ALL),
    ),
  )

  router.put(
    '/admin',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(AdminControllerAction.UPDATE),
    ),
  )
}
