import { Express, Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import { routes } from '../routes'

import swaggerFile from '../../docs/swagger-output.json'

export const setupRoutes = (app: Express): void => {
  const router = Router()

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app.use('/api', router)

  router.use(routes)
}
