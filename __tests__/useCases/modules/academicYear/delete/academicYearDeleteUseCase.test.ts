import { vitest, it, describe, expect } from 'vitest'

import {
  academicYearRepositoryStub,
  adminRepositoryStub,
} from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'

import { AcademicYearDeleteUseCase } from '@/useCases/modules/academicYear'

const makeSut = () => {
  const sut = new AcademicYearDeleteUseCase(
    academicYearRepositoryStub,
    adminRepositoryStub,
  )

  return {
    sut,
    academicYearRepositoryStub,
    adminRepositoryStub,
  }
}

describe('AcademicYearDeleteUseCase', () => {
  it('should return error if academic year not found', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnFindOne = vitest
      .spyOn(academicYearRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const spyOnDelete = vitest.spyOn(
      academicYearRepositoryStub,
      'delete',
    )

    const response = await sut.execute({
      id: 'invalid_id',
      userId: 'user_id',
    })

    expect(spyOnFindOne).toHaveBeenCalledWith({ id: 'invalid_id' })

    expect(spyOnDelete).not.toBeCalled()

    expect(response).toStrictEqual({
      data: null,
      error: 'Academic year not found',
    })
  })

  it('should throw if AcademicYearRepository throws', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    mockFactory().errorMock(
      academicYearRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute({
      id: 'invalid_id',
      userId: 'user_id',
    })

    await expect(response).rejects.toThrow()
  })

  it('should delete academic year', async () => {
    const { sut, academicYearRepositoryStub, adminRepositoryStub } =
      makeSut()

    const spyOnFindOne = vitest.spyOn(
      academicYearRepositoryStub,
      'findOne',
    )

    const spyOnDelete = vitest.spyOn(
      academicYearRepositoryStub,
      'delete',
    )

    const adminRepository = vitest.spyOn(
      adminRepositoryStub,
      'findByIdAndUpdate',
    )

    const response = await sut.execute({
      id: 'valid_id',
      userId: 'user_id',
    })

    expect(spyOnFindOne).toHaveBeenCalledWith({ id: 'valid_id' })

    expect(spyOnDelete).toHaveBeenCalledWith('valid_id')

    expect(adminRepository).toBeCalledWith(
      'user_id',
      { academicYearId: 'valid_id' },
      'pull',
    )

    expect(response).toStrictEqual({
      data: 'Academic year delete successfully',
      error: null,
    })
  })
})
