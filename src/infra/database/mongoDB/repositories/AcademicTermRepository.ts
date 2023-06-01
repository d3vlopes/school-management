import { AcademicTermModel } from '@/core/models'
import { IAcademicTermRepository } from '@/core/repositories'
import { AcademicTermCreateRequestDTO } from '@/core/dtos/academicTerm'

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
}
