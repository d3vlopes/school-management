import { AdminModel } from '@/core/models'
import { AdminRegisterRequestDTO } from '@/core/dtos/admin'

export interface IAdminRepository {
  create(data: AdminRegisterRequestDTO): Promise<AdminModel>
  findByEmail(email: string): Promise<Boolean>
}
