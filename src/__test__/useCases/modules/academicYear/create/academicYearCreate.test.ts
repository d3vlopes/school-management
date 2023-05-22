import { vitest, it, expect, describe } from 'vitest'

import {
  invalidLengthMock,
  invalidNumberMock,
} from '@/__test__/mocks'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AcademicYearCreateUseCase', () => {
  it('should return error if name is less than 4 characters', async () => {
    const { sut, validatorStub } = makeSut()

    const spyOnValidatorStub = invalidLengthMock(validatorStub)

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

    const spyOnValidatorStub = invalidNumberMock(validatorStub)

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

  it('should error if academic year already exists', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnAcademicYearRepository = vitest.spyOn(
      academicYearRepositoryStub,
      'findOne',
    )

    const response = await sut.execute(requestMockFactory['exists'])

    expect(spyOnAcademicYearRepository).toHaveBeenCalled()
    expect(response).toStrictEqual(responseMockFactory['exists'])
  })

  it('should create a new academic year', async () => {
    const { sut, academicYearRepositoryStub } = makeSut()

    const spyOnAcademicYearRepository = vitest.spyOn(
      academicYearRepositoryStub,
      'create',
    )

    vitest
      .spyOn(academicYearRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute(requestMockFactory['valid'])

    expect(spyOnAcademicYearRepository).toHaveBeenCalledWith({
      name: requestMockFactory['valid'].name,
      createdBy: requestMockFactory['valid'].createdBy,
      year: requestMockFactory['valid'].year,
    })

    expect(response).toStrictEqual(responseMockFactory['valid'])
  })
})
