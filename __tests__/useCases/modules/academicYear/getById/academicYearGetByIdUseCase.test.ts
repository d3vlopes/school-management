import { it, describe, vitest, expect } from 'vitest'

import { academicYearRepositoryStub } from '@/__tests__/stubs'
import { academicYearMock } from '@/__tests__/mocks/modules'

import { mockFactory } from '@/__tests__/helpers'

import { AcademicYearGetByIdUseCase } from '@/useCases/modules/academicYear'

import { ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

const makeSut = () => {
  const sut = new AcademicYearGetByIdUseCase(
    academicYearRepositoryStub,
  )

  return {
    sut,
    academicYearRepositoryStub,
  }
}

describe('AcademicYearGetByIdUseCase', () => {
  it('should return error if academic year is not found', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnRepository = vitest
      .spyOn(academicYearRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute('invalid_id')

    expect(spyOnRepository).toHaveBeenCalledWith({
      id: 'invalid_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE,
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

  it('should get academic year by id', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnRepository = vitest.spyOn(
      academicYearRepositoryStub,
      'findOne',
    )

    const response = await sut.execute('valid_id')

    expect(spyOnRepository).toHaveBeenCalledWith({
      id: 'valid_id',
    })

    expect(response).toStrictEqual({
      data: academicYearMock,
      error: null,
    })
  })
})
