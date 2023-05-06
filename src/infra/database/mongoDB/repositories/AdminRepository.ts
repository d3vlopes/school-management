import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IAdminRepository } from '@/core/repositories'

import { Admin } from '../models'

export class AdminRepository implements IAdminRepository {
  async create(data: AdminRegisterRequestDTO): Promise<AdminModel> {
    const user = new Admin(data)

    await user.save()

    user.id = user._id

    return user
  }

  async findByEmail(email: string): Promise<Boolean> {
    const existsEmail = await Admin.findOne({ email })

    return Boolean(existsEmail)
  }
}
