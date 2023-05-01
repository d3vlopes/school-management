import { Response } from 'express'

export const controllerTest = (res: Response) => {
  return res.json({ message: 'Hello World!' })
}
