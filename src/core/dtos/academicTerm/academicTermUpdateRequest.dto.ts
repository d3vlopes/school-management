import { AcademicTermModel } from '@/core/models'

export type AcademicTermUpdateRequestDTO = Partial<
  Pick<AcademicTermModel, 'name' | 'description' | 'duration'>
>
