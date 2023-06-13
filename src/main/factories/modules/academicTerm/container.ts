import {
  IAcademicTermRepository,
  IAdminRepository,
} from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Repositories } from '@/main/factories/shared'

export const academicTermRepository =
  ContainerFactory.createRepository(
    Repositories.ACADEMIC_TERM,
  ) as IAcademicTermRepository

export const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository
