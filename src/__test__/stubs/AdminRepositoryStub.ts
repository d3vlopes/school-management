import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { createAdminMockFactory, adminsMockFactory } from '../mocks'

const adminMock = createAdminMockFactory

class AdminRepositoryStub implements IAdminRepository {
  async create(data: AdminRegisterRequestDTO): Promise<AdminModel> {
    return createAdminMockFactory
  }

  async findByEmail(email: string): Promise<Boolean> {
    return false
  }

  async findOne(
    data: Partial<AdminModel>,
  ): Promise<AdminModel | null> {
    return adminMock
  }

  async findAll(): Promise<AdminModel[]> {
    return adminsMockFactory
  }
}

export const adminRepositoryStub = new AdminRepositoryStub()
