import { vitest, it, describe, expect } from 'vitest'

import { academicYearRepositoryStub } from '@/__test__/stubs'
import { mockFactory } from '@/__test__/helpers'

import { AcademicYearDeleteUseCase } from '@/useCases/modules/academicYear'

const makeSut = () => {
  const sut = new AcademicYearDeleteUseCase(
    academicYearRepositoryStub,
  )

  return {
    sut,
    academicYearRepositoryStub,
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

    const response = await sut.execute('invalid_id')

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

    const response = sut.execute('invalid_id')

    await expect(response).rejects.toThrow()
  })

  it('should delete academic year', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnFindOne = vitest.spyOn(
      academicYearRepositoryStub,
      'findOne',
    )

    const spyOnDelete = vitest.spyOn(
      academicYearRepositoryStub,
      'delete',
    )

    const response = await sut.execute('valid_id')

    expect(spyOnFindOne).toHaveBeenCalledWith({ id: 'valid_id' })

    expect(spyOnDelete).toHaveBeenCalledWith('valid_id')

    expect(response).toStrictEqual({
      data: 'Academic year delete successfully',
      error: null,
    })
  })
})
