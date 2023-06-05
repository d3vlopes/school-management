import { vitest, it, expect, describe } from 'vitest'

import { academicTermRepositoryStub } from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'
import { academicTermMock } from '@/__tests__/mocks/modules'

import { AcademicTermUpdateUseCase } from '@/useCases/modules/academicTerm'

import {
  requestMockFactory,
  updateAcademicTermMock,
  validNameMock,
} from './mocks'

describe('AcademicTermUpdateUseCase', () => {
  it('should return error if academic term not found', async () => {
    const sut = new AcademicTermUpdateUseCase(
      academicTermRepositoryStub,
    )

    validNameMock()

    vitest
      .spyOn(academicTermRepositoryStub, 'update')
      .mockResolvedValueOnce(null)

    const response = await sut.execute(
      requestMockFactory['invalid-id'],
    )

    expect(response).toStrictEqual({
      data: null,
      error: 'Academic term not found',
    })
  })

  it('should return error if name already exists', async () => {
    const sut = new AcademicTermUpdateUseCase(
      academicTermRepositoryStub,
    )

    const spyOnAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'findOne',
    )

    const response = await sut.execute(
      requestMockFactory['exists-name'],
    )

    expect(spyOnAcademicTermRepository).toHaveBeenCalledWith({
      name: requestMockFactory['exists-name'].name,
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Academic term already exists with that name',
    })
  })

  it('should throw if AcademicTermRepository throws', async () => {
    const sut = new AcademicTermUpdateUseCase(
      academicTermRepositoryStub,
    )

    mockFactory().errorMock(
      academicTermRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute(requestMockFactory['exists-name'])

    await expect(response).rejects.toThrow()
  })

  it('should update academic term', async () => {
    const sut = new AcademicTermUpdateUseCase(
      academicTermRepositoryStub,
    )

    const spyOnFindOne = validNameMock()

    const spyOnUpdate = updateAcademicTermMock({
      ...academicTermMock,
      name: requestMockFactory['valid'].name!,
    })

    const response = await sut.execute(requestMockFactory['valid'])

    expect(spyOnFindOne).toHaveBeenCalledWith({
      name: requestMockFactory['valid'].name,
    })

    expect(spyOnUpdate).toHaveBeenCalledWith(
      requestMockFactory['valid'].id,
      {
        name: requestMockFactory['valid'].name,
      },
    )

    expect(response).toStrictEqual({
      data: {
        ...academicTermMock,
        name: 'update_academic_term_name',
      },
      error: null,
    })
  })
})
