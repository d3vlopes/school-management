import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { createAdminMock, adminsMock } from '../mocks/modules'

const adminMock = createAdminMock

class AdminRepositoryStub implements IAdminRepository {
  async create(data: AdminRegisterRequestDTO): Promise<AdminModel> {
    return createAdminMock
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
    return adminsMock
  }

  async findByIdAndUpdate(
    id: string,
    data: {
      name?: string
      email?: string
      password?: string
      academicYearId?: string
    },
    operator: 'pull' | 'push' = 'push',
  ): Promise<AdminModel> {
    return {
      ...adminMock,
      name: 'Updated Admin Name',
      email: 'updated_admin@email.com',
    }
  }
}

export const adminRepositoryStub = new AdminRepositoryStub()
