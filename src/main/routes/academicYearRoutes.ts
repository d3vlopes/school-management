import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

import {
  AcademicYearModuleAction,
  AcademicYearModuleFactory,
} from '@/main/factories/modules'

const academicYearModuleFactory = new AcademicYearModuleFactory()

export default (router: Router): void => {
  router.post(
    '/academic-year/create',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicYearModuleFactory.makeController(
        AcademicYearModuleAction.CREATE,
      ),
    ),
  )

  router.get(
    '/academic-year',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicYearModuleFactory.makeController(
        AcademicYearModuleAction.GET_ALL,
      ),
    ),
  )

  router.get(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicYearModuleFactory.makeController(
        AcademicYearModuleAction.GET_BY_ID,
      ),
    ),
  )

  router.put(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicYearModuleFactory.makeController(
        AcademicYearModuleAction.UPDATE,
      ),
    ),
  )

  router.delete(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicYearModuleFactory.makeController(
        AcademicYearModuleAction.DELETE,
      ),
    ),
  )
}
