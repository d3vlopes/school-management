import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'

import { academicTermMock, academicTermsMock } from '../mocks/modules'

class AcademicTermRepositoryStub implements IAcademicTermRepository {
  async findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null> {
    return academicTermMock
  }

  async create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel> {
    return academicTermMock
  }

  async findAll(): Promise<AcademicTermModel[]> {
    return academicTermsMock
  }

  async update(
    id: string,
    data: Partial<
      Pick<AcademicTermModel, 'name' | 'description' | 'duration'>
    >,
  ): Promise<AcademicTermModel | null> {
    return academicTermMock
  }

  async delete(id: string): Promise<void> {}
}

export const academicTermRepositoryStub =
  new AcademicTermRepositoryStub()
