import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  makeAdminRegisterController,
  makeAdminLoginController,
} from '@/main/factories/controllers/modules/admin'

export const usersRoutes = Router()

export default (router: Router): void => {
  router.post(
    '/admin/register',
    adaptRoute(makeAdminRegisterController()),
  )

  router.post('/admin/login', adaptRoute(makeAdminLoginController()))
}
