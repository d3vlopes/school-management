import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  makeAdminRegisterController,
  makeAdminLoginController,
  makeAdminGetProfileController,
  makeAdminGetAllController,
  makeAdminUpdateController,
} from '@/main/factories/controllers/modules/admin'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

export const usersRoutes = Router()

export default (router: Router): void => {
  router.post(
    '/admin/register',
    adaptRoute(makeAdminRegisterController()),
  )

  router.post('/admin/login', adaptRoute(makeAdminLoginController()))

  router.get(
    '/admin/profile',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAdminGetProfileController()),
  )

  router.get(
    '/admin',
    authMiddleware,
    adaptRoute(makeAdminGetAllController()),
  )

  router.put(
    '/admin',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAdminUpdateController()),
  )
}
