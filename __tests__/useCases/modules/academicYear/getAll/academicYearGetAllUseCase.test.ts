import { vitest, expect, it, describe } from 'vitest'

import { academicYearRepositoryStub } from '@/__tests__/stubs'
import { academicYearsMock } from '@/__tests__/mocks/modules'

import { mockFactory } from '@/__tests__/helpers'

import { AcademicYearGetAllUseCase } from '@/useCases/modules/academicYear'

const makeSut = () => {
  const sut = new AcademicYearGetAllUseCase(
    academicYearRepositoryStub,
  )

  return {
    sut,
    academicYearRepositoryStub,
  }
}

describe('AcademicYearGetAllUseCase', () => {
  it('Should get all academic years ', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnRepository = vitest.spyOn(
      academicYearRepositoryStub,
      'findAll',
    )

    const response = await sut.execute()

    expect(spyOnRepository).toBeCalled()

    expect(response).toStrictEqual({
      data: academicYearsMock,
      error: null,
    })
  })

  it('should throw if AcademicYearRepository throws', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    mockFactory().errorMock(
      academicYearRepositoryStub,
      'findAll' as never,
    )

    const response = sut.execute()

    await expect(response).rejects.toThrow()
  })
})
