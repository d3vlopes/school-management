import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  TeacherModuleFactory,
  TeacherModuleAction,
} from '@/main/factories/modules'

import {
  authMiddleware,
  adminRoleMiddleware,
  teacherRoleMiddleware,
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

teacherRoutes.get(
  '/teachers',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    teacherModuleFactory.makeController(TeacherModuleAction.GET_ALL),
  ),
)

teacherRoutes.get(
  '/teachers/admin/:id',
  adminRoleMiddleware,
  authMiddleware,
  adaptRoute(
    teacherModuleFactory.makeController(
      TeacherModuleAction.GET_BY_ID,
    ),
  ),
)

teacherRoutes.get(
  '/teachers/profile',
  teacherRoleMiddleware,
  authMiddleware,
  adaptRoute(
    teacherModuleFactory.makeController(
      TeacherModuleAction.GET_PROFILE,
    ),
  ),
)
