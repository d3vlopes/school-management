import { Request, Response, NextFunction } from 'express'

import { IMiddleware } from '@/presentation/contracts'

export const adaptMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const tmp = req.headers?.['authorization']

    const request = {
      accessToken: tmp ? tmp.slice(7, tmp.length) : '',
      ...(req.headers || {}),
    }

    const httpResponse = await middleware.handle(request)

    req.user = httpResponse.body

    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body?.message,
      })
    }
  }
}
