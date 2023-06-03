import { Express, Router } from 'express'

import { routes } from '../routes'

export const setupRoutes = (app: Express): void => {
  const router = Router()

  app.use('/api', router)

  router.use(routes)
}
