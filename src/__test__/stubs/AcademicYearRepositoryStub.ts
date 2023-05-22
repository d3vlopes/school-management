import { AcademicYearCreateDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import { academicYearMockFactory } from '../mocks'

class AcademicYearRepositoryStub implements IAcademicYearRepository {
  async findOne(
    data: Partial<AcademicYearModel>,
  ): Promise<AcademicYearModel | null> {
    return academicYearMockFactory
  }

  async create(
    data: AcademicYearCreateDTO,
  ): Promise<AcademicYearModel> {
    return academicYearMockFactory
  }
}

export const academicYearRepositoryStub =
  new AcademicYearRepositoryStub()
