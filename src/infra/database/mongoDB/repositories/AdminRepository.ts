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

  async findOne(
    data: Partial<AdminModel>,
  ): Promise<AdminModel | null> {
    let user = null

    if (data.id) {
      user = await Admin.findOne({ _id: data.id })
    } else {
      user = await Admin.findOne(data)
    }

    return user
  }

  async findAll(): Promise<AdminModel[]> {
    const users = await Admin.find()

    return users
  }

  async findByIdAndUpdate(
    id: string,
    data: {
      name?: string | undefined
      email?: string | undefined
      password?: string | undefined
    },
  ): Promise<AdminModel | null> {
    const admin = await Admin.findByIdAndUpdate(id, data, {
      new: true,
    })

    return admin
  }
}
