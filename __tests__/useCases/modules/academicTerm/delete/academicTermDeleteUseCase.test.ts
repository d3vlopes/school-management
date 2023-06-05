import { vitest, it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { makeSut } from './helpers'

describe('AcademicTermDeleteUseCase', () => {
  it('should return error if academic term not found', async () => {
    const { sut, academicTermRepositoryStub } = makeSut()

    const spyOnAcademicTermRepository = vitest
      .spyOn(academicTermRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute({
      id: 'invalid_id',
      userId: 'user_id',
    })

    expect(spyOnAcademicTermRepository).toBeCalledWith({
      id: 'invalid_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Academic term not found',
    })
  })

  it('should throw if AcademicYearRepository throws', async () => {
    const { sut, academicTermRepositoryStub } = makeSut()

    mockFactory().errorMock(
      academicTermRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute({
      id: 'invalid_id',
      userId: 'user_id',
    })

    await expect(response).rejects.toThrow()
  })

  it('should throw if AdminRepository throws', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    mockFactory().errorMock(
      adminRepositoryStub,
      'findByIdAndUpdate' as never,
    )

    const response = sut.execute({
      id: 'any_id',
      userId: 'invalid_user_id',
    })

    await expect(response).rejects.toThrow()
  })

  it('should disassociate academic term to admin', async () => {
    const { sut, adminRepositoryStub } = makeSut()

    const spyOnAdminRepository = vitest.spyOn(
      adminRepositoryStub,
      'findByIdAndUpdate',
    )

    await sut.execute({
      id: 'valid_id',
      userId: 'user_id',
    })

    expect(spyOnAdminRepository).toBeCalledWith(
      'user_id',
      { academicTermId: 'valid_id' },
      'pull',
    )
  })

  it('should delete academic term', async () => {
    const { sut, academicTermRepositoryStub, adminRepositoryStub } =
      makeSut()

    const spyOnAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'delete',
    )

    const spyOnAdminRepository = vitest.spyOn(
      adminRepositoryStub,
      'findByIdAndUpdate',
    )

    const response = await sut.execute({
      id: 'valid_id',
      userId: 'user_id',
    })

    expect(spyOnAcademicTermRepository).toBeCalledWith('valid_id')

    expect(spyOnAdminRepository).toBeCalled()

    expect(response).toStrictEqual({
      data: 'Academic term delete successfully',
      error: null,
    })
  })
})
