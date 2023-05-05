import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

class AdminRepositoryStub implements IAdminRepository {
  async create(data: AdminRegisterRequestDTO): Promise<AdminModel> {
    return {
      id: '1234',
      name: 'User Name',
      email: 'user@email.com',
      role: 'admin',
      password: 'password_encrypted',
      academicTerms: [],
      academicYears: [],
      classLevels: [],
      programs: [],
      students: [],
      teachers: [],
      yearGroups: [],
      createdAt: new Date(23, 5),
      updatedAt: new Date(23, 5),
    }
  }

  async findByEmail(email: string): Promise<Boolean> {
    return false
  }
}

export const adminRepositoryStub = new AdminRepositoryStub()
