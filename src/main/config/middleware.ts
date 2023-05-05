import express, { Express } from 'express'
import cors from 'cors'

export const setupMiddleware = (app: Express): void => {
  app.use(express.json())
  app.use(cors())
}
