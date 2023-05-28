import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  makeAcademicYearCreateController,
  makeAcademicYearGetAllController,
  makeAcademicYearGetByIdController,
  makeAcademicYearUpdateController,
  makeAcademicYearDeleteController,
} from '@/main/factories/controllers/modules/academicYear'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

export const usersRoutes = Router()

export default (router: Router): void => {
  router.post(
    '/academic-year/create',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAcademicYearCreateController()),
  )

  router.get(
    '/academic-year',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAcademicYearGetAllController()),
  )

  router.get(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAcademicYearGetByIdController()),
  )

  router.put(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAcademicYearUpdateController()),
  )

  router.delete(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(makeAcademicYearDeleteController()),
  )
}
