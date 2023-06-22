import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'
import {
  AcademicTermCreateRequestDTO,
  AcademicTermUpdateRequestDTO,
} from '@/core/dtos/academicTerm'

import { AcademicTerm } from '../models'

export class AcademicTermRepository
  implements IAcademicTermRepository
{
  async findOne(
    data: Partial<AcademicTermModel>,
  ): Promise<AcademicTermModel | null> {
    let academicTerm = null

    if (data.id) {
      academicTerm = await AcademicTerm.findOne({ _id: data.id })
    } else {
      academicTerm = await AcademicTerm.findOne(data)
    }

    return academicTerm
  }

  async create(
    data: AcademicTermCreateRequestDTO,
  ): Promise<AcademicTermModel> {
    const academicTerm = new AcademicTerm(data)

    await academicTerm.save()

    academicTerm.id = academicTerm._id

    return academicTerm
  }

  async findAll(): Promise<AcademicTermModel[]> {
    const academicTerms = await AcademicTerm.find()

    return academicTerms
  }

  async update(
    id: string,
    data: AcademicTermUpdateRequestDTO,
  ): Promise<AcademicTermModel | null> {
    const academicTerm = await AcademicTerm.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      },
    )

    return academicTerm
  }

  async delete(id: string): Promise<void> {
    await AcademicTerm.findByIdAndDelete(id)
  }
}
