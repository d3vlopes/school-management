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
  '/academic-years/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.CREATE,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-years',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_ALL,
    ),
  ),
)

academicYearRoutes.get(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.GET_BY_ID,
    ),
  ),
)

academicYearRoutes.put(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.UPDATE,
    ),
  ),
)

academicYearRoutes.delete(
  '/academic-years/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicYearModuleFactory.makeController(
      AcademicYearModuleAction.DELETE,
    ),
  ),
)
