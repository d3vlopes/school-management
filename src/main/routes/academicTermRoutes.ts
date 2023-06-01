import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

import {
  AcademicTermModuleAction,
  AcademicTermModuleFactory,
} from '@/main/factories/modules'

const academicTermModuleFactory = new AcademicTermModuleFactory()

export default (router: Router): void => {
  router.post(
    '/academic-term/create',
    adminRoleMiddleware,
    authMiddleware,
    adaptRoute(
      academicTermModuleFactory.makeController(
        AcademicTermModuleAction.CREATE,
      ),
    ),
  )
}
