import { vitest, expect, it, describe } from 'vitest'

import { academicYearRepositoryStub } from '@/__test__/stubs'
import { academicYearsMockFactory } from '@/__test__/mocks'

import { mockFactory } from '@/__test__/helpers'

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
      data: academicYearsMockFactory,
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
