import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import { makeAcademicYearCreateController } from '../factories/controllers/modules/academicYear'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

export const usersRoutes = Router()

export default (router: Router): void => {
  router.post(
    '/academic-year/create',
    authMiddleware,
    adminRoleMiddleware,
    adaptRoute(makeAcademicYearCreateController()),
  )
}