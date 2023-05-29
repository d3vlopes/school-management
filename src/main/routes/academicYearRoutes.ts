import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

import {
  AcademicYearControllerAction,
  AcademicYearControllerFactory,
} from '@/main/factories/modules'

const controllerFactory = new AcademicYearControllerFactory()

export default (router: Router): void => {
  router.post(
    '/academic-year/create',
    adminRoleMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AcademicYearControllerAction.CREATE,
      ),
    ),
  )

  router.get(
    '/academic-year',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AcademicYearControllerAction.GET_ALL,
      ),
    ),
  )

  router.get(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AcademicYearControllerAction.GET_BY_ID,
      ),
    ),
  )

  router.put(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AcademicYearControllerAction.UPDATE,
      ),
    ),
  )

  router.delete(
    '/academic-year/:id',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      controllerFactory.makeController(
        AcademicYearControllerAction.DELETE,
      ),
    ),
  )
}
