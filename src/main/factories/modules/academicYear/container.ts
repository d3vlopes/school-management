import {
  IAcademicYearRepository,
  IAdminRepository,
} from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Adapters, Repositories } from '@/main/factories/shared'

import { IValidator } from '@/useCases/contracts/adapters'

export const academicYearRepository =
  ContainerFactory.createRepository(
    Repositories.ACADEMIC_YEAR,
  ) as IAcademicYearRepository

export const adminRepository = ContainerFactory.createRepository(
  Repositories.ADMIN,
) as IAdminRepository

export const validatorAdapter = ContainerFactory.createAdapter(
  Adapters.VALIDATOR,
) as IValidator
