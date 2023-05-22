import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
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
    data: AcademicYearCreateRequestDTO,
  ): Promise<AcademicYearModel> {
    return academicYearMockFactory
  }
}

export const academicYearRepositoryStub =
  new AcademicYearRepositoryStub()
