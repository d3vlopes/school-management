/* eslint-disable no-console */
import * as dotenv from 'dotenv'

import { PORT } from '@/config'

import { Database } from '@/infra/database/mongoDB'

import { app } from '@/infra/app'

dotenv.config()

async function initialize() {
  try {
    Database.getInstance()

    app.listen(PORT || 8000, () => console.log('Server is running!'))
  } catch (err) {
    console.error(err)

    process.exit(1)
  }
}

initialize()
