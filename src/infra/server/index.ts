/* eslint-disable no-console */
import * as dotenv from 'dotenv'

dotenv.config()

import express, { Response } from 'express'

import { controllerTest } from '@/controller'

import { Database } from '@/infra/database/mongoDB'

Database.getInstance()

const app = express()

app.get('/', (_, res: Response) => {
  controllerTest(res)
})

app.listen(8000, () => console.log('Server is running!'))
