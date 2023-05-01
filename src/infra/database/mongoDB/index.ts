/* eslint-disable no-console */
import mongoose from 'mongoose'

import { MONGO_URL } from '@/config'

export class Database {
  private static _database: Database

  private constructor() {
    const dbUrl = MONGO_URL

    if (dbUrl) {
      mongoose.set('strictQuery', false)

      mongoose
        .connect(dbUrl)
        .then(() => console.log('Connected with database'))
        .catch(() => console.log('Not connected with database'))
    }
  }

  static getInstance() {
    if (this._database) {
      return this._database
    }

    this._database = new Database()
    return this._database
  }
}
