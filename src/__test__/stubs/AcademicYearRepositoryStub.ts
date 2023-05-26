import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import {
  academicYearMockFactory,
  academicYearsMockFactory,
} from '../mocks'

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

  async findAll(): Promise<AcademicYearModel[]> {
    return academicYearsMockFactory
  }

  async update(
    id: string,
    data: Partial<
      Pick<
        AcademicYearModel,
        'name' | 'createdBy' | 'year' | 'isCurrent'
      >
    >,
  ): Promise<AcademicYearModel | null> {
    return {
      ...academicYearMockFactory,
      name: 'Academic Year Update',
    }
  }

  async delete(id: string): Promise<void> {}
}

export const academicYearRepositoryStub =
  new AcademicYearRepositoryStub()
