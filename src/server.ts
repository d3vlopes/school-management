/* eslint-disable no-console */
import express, { Response } from 'express'

import { controllerTest } from '@/controller'

const app = express()

app.get('/', (_, res: Response) => {
  controllerTest(res)
})

app.listen(8000, () => console.log('Server is running!'))
