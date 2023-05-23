import { Request, Response } from 'express'

import { IController } from '@/presentation/contracts'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      params: { ...(req.params || {}) },
      user: req.user,
    }

    const httpResponse = await controller.handle(request)

    if (
      httpResponse.statusCode >= 200 &&
      httpResponse.statusCode <= 299
    ) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body?.message,
      })
    }
  }
}
