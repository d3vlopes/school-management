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

export const academicYearRoutes = Router()

academicYearRoutes.post(
  '/academic-year/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.CREATE,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-year',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_ALL,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-year/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_BY_ID,
    ),
  ),
)

academicYearRoutes.put(
  '/academic-year/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.UPDATE,
    ),
  ),
)

academicYearRoutes.delete(
  '/academic-year/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.DELETE,
    ),
  ),
)
