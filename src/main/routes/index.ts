import { Router } from 'express'

import {
  academicTermRoutes,
  academicYearRoutes,
  adminRoutes,
} from './modules'

const router = Router()

router.use(adminRoutes)
router.use(academicYearRoutes)
router.use(academicTermRoutes)

export const routes = router
