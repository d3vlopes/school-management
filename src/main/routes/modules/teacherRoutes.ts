import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  TeacherModuleFactory,
  TeacherModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
} from '@/main/middlewares'

const teacherModuleFactory = new TeacherModuleFactory()

export const teacherRoutes = Router()

teacherRoutes.post(
  '/teachers/register',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    teacherModuleFactory.makeController(TeacherModuleAction.REGISTER),
  ),
)

teacherRoutes.post(
  '/teachers/login',
  adaptRoute(
    teacherModuleFactory.makeController(TeacherModuleAction.LOGIN),
  ),
)
