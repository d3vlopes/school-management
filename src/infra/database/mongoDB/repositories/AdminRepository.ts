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
      user = await Admin.findOne({ _id: data.id }).populate(
        'academicYears academicTerms',
      )
    } else {
      user = await Admin.findOne(data).populate(
        'academicYears academicTerms',
      )
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
      name?: string
      email?: string
      password?: string
      academicYearId?: string
      academicTermId?: string
    },
    operator: 'pull' | 'push' = 'push',
  ): Promise<AdminModel | null> {
    let admin

    if (operator === 'push') {
      admin = await Admin.findByIdAndUpdate(
        id,
        {
          data,
          $push: {
            academicYears: data.academicYearId,
            academicTerms: data.academicTermId,
          },
        },
        {
          new: true,
        },
      )
    } else {
      admin = await Admin.findByIdAndUpdate(
        id,
        {
          data,
          $pull: {
            academicYears: data?.academicYearId,
            academicTerms: data?.academicTermId,
          },
        },
        {
          new: true,
        },
      )
    }

    return admin
  }
}
