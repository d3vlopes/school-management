import { vitest, it, describe, expect } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import {
  requestMockFactory,
  responseMockFactory,
  validNameMock,
} from './mocks'

import { makeSut } from './helpers'

describe('AcademicYearUpdateUseCase', () => {
  it('should return error if name is less than 4 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub =
      mockFactory().invalidLengthMock(validatorStub)

    const response = await sut.execute(
      requestMockFactory['invalid-name'],
    )

    const input = requestMockFactory['invalid-name'].name
    const min = 4
    const max = 20

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return error if year is invalid', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub =
      mockFactory().invalidNumberMock(validatorStub)

    const response = await sut.execute(
      requestMockFactory['invalid-year'],
    )

    const input = requestMockFactory['invalid-year'].year
    const min = 1994
    const max = 2023

    expect(spyOnValidatorStub).toHaveBeenCalledWith(input, min, max)

    expect(response).toStrictEqual(
      responseMockFactory['invalid-year'],
    )
  })

  it('should return error if name already exists', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnAcademicYearRepositoryStub = vitest.spyOn(
      academicYearRepositoryStub,
      'findOne',
    )

    const response = await sut.execute(
      requestMockFactory['exists-name'],
    )

    expect(spyOnAcademicYearRepositoryStub).toHaveBeenCalledWith({
      name: requestMockFactory['exists-name'].name,
    })

    expect(response).toStrictEqual(responseMockFactory['exists-name'])
  })

  it('should throw if AcademicYearRepository throws', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    mockFactory().errorMock(
      academicYearRepositoryStub,
      'findOne' as never,
    )

    const response = sut.execute(requestMockFactory['exists-name'])

    await expect(response).rejects.toThrow()
  })

  it('should update academic year', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnAcademicYearRepositoryStub = vitest.spyOn(
      academicYearRepositoryStub,
      'update',
    )

    validNameMock(academicYearRepositoryStub)

    const data = requestMockFactory['valid']

    const response = await sut.execute(data)

    expect(spyOnAcademicYearRepositoryStub).toHaveBeenCalledWith(
      data.id,
      {
        name: data.name,
        year: data.year,
        createdBy: data.userId,
      },
    )

    expect(response).toStrictEqual(responseMockFactory['valid'])
  })
})
