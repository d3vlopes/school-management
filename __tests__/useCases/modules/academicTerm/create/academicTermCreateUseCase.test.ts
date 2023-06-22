import { vitest, it, expect, describe } from 'vitest'

import { academicTermMock } from '@/__tests__/mocks/modules'

import { mockFactory } from '@/__tests__/helpers'

import {
  requestMockFactory,
  responseMockFactory,
  validNameMock,
} from './mocks'

import { makeSut } from './helpers'

describe('AcademicTermCreateUseCase', () => {
  it('should return error if academic term already exists', async () => {
    const { sut, academicTermRepositoryStub } = makeSut()

    const spyOnFindOneAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'findOne',
    )

    const spyOnCreateAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'create',
    )

    const response = await sut.execute(
      requestMockFactory['exists-name'],
    )

    expect(spyOnFindOneAcademicTermRepository).toHaveBeenCalledWith({
      name: requestMockFactory['exists-name'].name,
    })

    expect(spyOnCreateAcademicTermRepository).not.toBeCalled()

    expect(response).toStrictEqual(responseMockFactory['exists-name'])
  })

  it('should throw if AcademicTermRepository throw', async () => {
    const { sut, academicTermRepositoryStub } = makeSut()

    mockFactory().errorMock(
      academicTermRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute(requestMockFactory['exists-name'])

    await expect(response).rejects.toThrow()
  })

  it('should create a new academic term', async () => {
    const { sut, academicTermRepositoryStub } = makeSut()

    const spyOnFindOneAcademicTermRepository = validNameMock(
      academicTermRepositoryStub,
    )

    const spyOnCreateAcademicTermRepository = vitest.spyOn(
      academicTermRepositoryStub,
      'create',
    )

    const { name, description, duration, userId } =
      requestMockFactory['valid']

    const response = await sut.execute(requestMockFactory['valid'])

    expect(spyOnFindOneAcademicTermRepository).toHaveBeenCalledWith({
      name,
    })

    expect(spyOnCreateAcademicTermRepository).toBeCalledWith({
      name,
      description,
      duration,
      createdBy: userId,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })

  it('should associate academic term to admin', async () => {
    const { sut, adminRepositoryStub, academicTermRepositoryStub } =
      makeSut()

    validNameMock(academicTermRepositoryStub)

    const spyOnAdminRepository = vitest.spyOn(
      adminRepositoryStub,
      'findByIdAndUpdate',
    )

    await sut.execute(requestMockFactory['valid'])

    expect(spyOnAdminRepository).toBeCalledWith(
      requestMockFactory['valid'].userId,
      { academicTermId: academicTermMock.id },
      'push',
    )
  })
})
