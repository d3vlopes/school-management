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
  '/academic-term/create',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.CREATE,
    ),
  ),
)

academicTermRoutes.get(
  '/academic-term',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    academicTermModuleFactory.makeController(
      AcademicTermModuleAction.GET_ALL,
    ),
  ),
)
