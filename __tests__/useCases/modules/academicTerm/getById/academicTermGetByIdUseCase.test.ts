import { vitest, it, expect, describe } from 'vitest'

import { academicTermRepositoryStub } from '@/__tests__/stubs'
import { academicTermMock } from '@/__tests__/mocks/modules'
import { mockFactory } from '@/__tests__/helpers'

import { AcademicTermGetByIdUseCase } from '@/useCases/modules/academicTerm'

describe('AcademicTermGetByIdUseCase', () => {
  it('should return error if academic term not found', async () => {
    const sut = new AcademicTermGetByIdUseCase(
      academicTermRepositoryStub,
    )

    const spyOnAcademicTermRepository = vitest
      .spyOn(academicTermRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute('invalid_id')

    expect(spyOnAcademicTermRepository).toBeCalledWith({
      id: 'invalid_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Academic term not found',
    })
  })

  it('should throw if AcademicTermRepository throws', async () => {
    const sut = new AcademicTermGetByIdUseCase(
      academicTermRepositoryStub,
    )

    mockFactory().errorMock(
      academicTermRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute('invalid_id')

    await expect(response).rejects.toThrow()
  })

  it('should get academic term by id', async () => {
    const sut = new AcademicTermGetByIdUseCase(
      academicTermRepositoryStub,
    )

    const spyOnAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'findOne',
    )

    const response = await sut.execute('valid_id')

    expect(spyOnAcademicTermRepository).toBeCalledWith({
      id: 'valid_id',
    })

    expect(response).toStrictEqual({
      data: academicTermMock,
      error: null,
    })
  })
})
