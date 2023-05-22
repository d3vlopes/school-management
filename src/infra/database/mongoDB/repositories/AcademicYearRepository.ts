import { AcademicYearModel } from '@/core/models'
import { AcademicYearCreateDTO } from '@/core/dtos/academicYear'
import { IAcademicYearRepository } from '@/core/repositories'

import { AcademicYear } from '../models'

export class AcademicYearRepository
  implements IAcademicYearRepository
{
  async findOne(
    data: Partial<AcademicYearModel>,
  ): Promise<AcademicYearModel | null> {
    let academicYear = null

    if (data.id) {
      academicYear = await AcademicYear.findOne({ _id: data.id })
    } else {
      academicYear = await AcademicYear.findOne(data)
    }

    return academicYear
  }

  async create(
    data: AcademicYearCreateDTO,
  ): Promise<AcademicYearModel> {
    const academicYear = new AcademicYear(data)

    await academicYear.save()

    academicYear.id = academicYear._id

    return academicYear
  }
}
