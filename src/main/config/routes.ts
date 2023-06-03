import { Express, Router } from 'express'

import {
  adminRoutes,
  academicTermRoutes,
  academicYearRoutes,
} from '../routes'

export const setupRoutes = (app: Express): void => {
  const router = Router()

  app.use('/api', router)

  router.use(adminRoutes)
  router.use(academicYearRoutes)
  router.use(academicTermRoutes)
}
