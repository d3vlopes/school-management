import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  makeAdminRegisterController,
  makeAdminLoginController,
  makeAdminGetProfileController,
} from '@/main/factories/controllers/modules/admin'

import { authMiddleware } from '@/main/middlewares'

export const usersRoutes = Router()

export default (router: Router): void => {
  router.post(
    '/admin/register',
    adaptRoute(makeAdminRegisterController()),
  )

  router.post('/admin/login', adaptRoute(makeAdminLoginController()))

  router.get(
    '/admin/profile',
    authMiddleware,
    adaptRoute(makeAdminGetProfileController()),
  )
}
