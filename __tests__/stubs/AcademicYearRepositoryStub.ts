import { AcademicYearCreateRequestDTO } from '@/core/dtos/academicYear'
import { AcademicYearModel } from '@/core/models'
import { IAcademicYearRepository } from '@/core/repositories'

import { academicYearMock, academicYearsMock } from '../mocks/modules'

class AcademicYearRepositoryStub implements IAcademicYearRepository {
  async findOne(
    data: Partial<AcademicYearModel>,
  ): Promise<AcademicYearModel | null> {
    return academicYearMock
  }

  async create(
    data: AcademicYearCreateRequestDTO,
  ): Promise<AcademicYearModel> {
    return academicYearMock
  }

  async findAll(): Promise<AcademicYearModel[]> {
    return academicYearsMock
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
      ...academicYearMock,
      name: 'Academic Year Update',
    }
  }

  async delete(id: string): Promise<void> {}
}

export const academicYearRepositoryStub =
  new AcademicYearRepositoryStub()
