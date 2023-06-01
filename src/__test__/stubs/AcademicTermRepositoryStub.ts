import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'
import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'

import { academicTermMockFactory } from '../mocks'

class AcademicTermRepositoryStub implements IAcademicTermRepository {
  async findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null> {
    return academicTermMockFactory
  }

  async create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel> {
    return academicTermMockFactory
  }
}

export const academicTermRepositoryStub =
  new AcademicTermRepositoryStub()
