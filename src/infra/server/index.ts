/* eslint-disable no-console */
import * as dotenv from 'dotenv'

dotenv.config()

import { Database } from '@/infra/database/mongoDB'

import { app } from '../app'

Database.getInstance()

app.listen(8000, () => console.log('Server is running!'))
