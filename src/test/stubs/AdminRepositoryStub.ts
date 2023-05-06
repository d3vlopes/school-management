import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { createAdminMockFactory } from '../mock'

class AdminRepositoryStub implements IAdminRepository {
  async create(data: AdminRegisterRequestDTO): Promise<AdminModel> {
    return createAdminMockFactory
  }

  async findByEmail(email: string): Promise<Boolean> {
    return false
  }
}

export const adminRepositoryStub = new AdminRepositoryStub()
