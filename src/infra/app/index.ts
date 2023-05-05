import express from 'express'

import { setupMiddleware, setupRoutes } from '@/main/config'

export const app = express()

setupMiddleware(app)

setupRoutes(app)
