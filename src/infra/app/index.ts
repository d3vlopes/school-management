import express, { Response } from 'express'

import { controllerTest } from '@/presentation/controller'

import { auth } from '@/main/middlewares/auth'

export const app = express()

app.use(express.json())

app.get('/', (_, res: Response) => {
  controllerTest(res)
})

app.get('/auth', auth, (_, res: Response) => {
  controllerTest(res)
})
