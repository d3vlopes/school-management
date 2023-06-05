import { vitest, it, describe, expect } from 'vitest'

import { AcademicTermGetAllUseCase } from '@/useCases/modules/academicTerm'

import { academicTermRepositoryStub } from '@/__tests__/stubs'

import { mockFactory } from '@/__tests__/helpers'

import { academicTermsMock } from '@/__tests__/mocks/modules'

describe('AcademicTermGetAllUseCase', () => {
  it('should throw if AcademicTermRepository throws', async () => {
    const sut = new AcademicTermGetAllUseCase(
      academicTermRepositoryStub,
    )

    const academicTermRepository = mockFactory().errorMock(
      academicTermRepositoryStub,
      'findAll' as never,
    )

    const response = sut.execute()

    expect(academicTermRepository).toBeCalled()

    await expect(response).rejects.toThrow()
  })

  it('should get all academic terms', async () => {
    const sut = new AcademicTermGetAllUseCase(
      academicTermRepositoryStub,
    )

    const spyOnAcademicTermRepository = vitest
      .spyOn(academicTermRepositoryStub, 'findAll')
      .mockResolvedValueOnce(academicTermsMock)

    const response = await sut.execute()

    expect(spyOnAcademicTermRepository).toBeCalled()

    expect(response).toStrictEqual({
      data: academicTermsMock,
      error: null,
    })
  })
})
