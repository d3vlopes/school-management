import { AcademicYearModel } from '@/core/models'
import {
  AcademicYearCreateRequestDTO,
  AcademicYearUpdateRequestDTO,
} from '@/core/dtos/academicYear'
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
    data: AcademicYearCreateRequestDTO,
  ): Promise<AcademicYearModel> {
    const academicYear = new AcademicYear(data)

    await academicYear.save()

    academicYear.id = academicYear._id

    return academicYear
  }

  async findAll(): Promise<AcademicYearModel[]> {
    const academicYears = await AcademicYear.find()

    return academicYears
  }

  async update(
    id: string,
    data: AcademicYearUpdateRequestDTO,
  ): Promise<AcademicYearModel | null> {
    const academicYear = await AcademicYear.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      },
    )

    return academicYear
  }

  async delete(id: string): Promise<void> {
    await AcademicYear.findByIdAndDelete(id)
  }
}
