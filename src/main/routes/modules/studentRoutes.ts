import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  StudentModuleFactory,
  StudentModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const studentModuleFactory = new StudentModuleFactory()

export const studentRoutes = Router()

studentRoutes.post(
  '/students/register',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    studentModuleFactory.makeController(StudentModuleAction.REGISTER),
  ),
)

studentRoutes.post(
  '/students/login',
  adaptRoute(
    studentModuleFactory.makeController(StudentModuleAction.LOGIN),
  ),
)

studentRoutes.get(
  '/students',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    studentModuleFactory.makeController(StudentModuleAction.GET_ALL),
  ),
)
