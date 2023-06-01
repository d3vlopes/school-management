import { AdminModel } from '@/core/models'

import { AdminRegisterRequestDTO } from '@/core/dtos/admin'

export interface IAdminRepository {
  create(data: AdminRegisterRequestDTO): Promise<AdminModel>
  findByEmail(email: string): Promise<Boolean>
  findOne(data: Partial<AdminModel>): Promise<AdminModel | null>
  findAll(): Promise<AdminModel[]>
  findByIdAndUpdate(
    id: string,
    data: {
      name?: string
      email?: string
      password?: string
      academicYearId?: string
      academicTermId?: string
    },
    operator?: 'pull' | 'push',
  ): Promise<AdminModel | null>
}
