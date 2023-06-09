import { Router } from 'express'

import {
  academicTermRoutes,
  academicYearRoutes,
  adminRoutes,
  teacherRoutes,
} from './modules'

export const routes = Router()

routes.use(adminRoutes)
routes.use(academicYearRoutes)
routes.use(academicTermRoutes)
routes.use(teacherRoutes)
