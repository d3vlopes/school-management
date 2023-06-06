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

export const academicTermRoutes = Router()

academicTermRoutes.post(
  '/academic-terms/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.CREATE,
    ),
  ),
)

academicTermRoutes.get(
  '/academic-terms',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.GET_ALL,
    ),
  ),
)

academicTermRoutes.get(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.GET_BY_ID,
    ),
  ),
)

academicTermRoutes.put(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.UPDATE,
    ),
  ),
)

academicTermRoutes.delete(
  '/academic-terms/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.DELETE,
    ),
  ),
)
