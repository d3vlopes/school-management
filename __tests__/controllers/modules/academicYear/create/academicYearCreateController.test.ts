import { expect, it, describe } from 'vitest'

import {
  errorMock,
  useCaseErrorMock,
  useCaseSuccessMock,
} from '@/__tests__/mocks'

import { academicYearMock } from '@/__tests__/mocks/modules'

import { MissingParamError, ServerError } from '@/presentation/errors'

import {
  ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
  ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

import { makeSut } from './helpers'

import { requestMockFactory } from './mocks'

describe('AcademicYearCreateController', () => {
  it('should return status code 400 if name is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-name'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  })

  it('should return status code 400 if year is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-year'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('year'))
  })

  it('should return status code 400 if name is invalid', async () => {
    const { sut, academicYearCreateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearCreateUseCaseStub,
      ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-name'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if year is invalid', async () => {
    const { sut, academicYearCreateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearCreateUseCaseStub,
      ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-year'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if academic year already exists', async () => {
    const { sut, academicYearCreateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearCreateUseCaseStub,
      ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
    )

    const response = await sut.handle(
      requestMockFactory['already-exists'],
    )

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicYearCreateUseCaseStub } = makeSut()

    errorMock(academicYearCreateUseCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['already-exists'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 201 if valid data is provided', async () => {
    const { sut, academicYearCreateUseCaseStub } = makeSut()

    useCaseSuccessMock(
      academicYearCreateUseCaseStub,
      academicYearMock,
    )

    const response = await sut.handle(requestMockFactory['valid'])

    expect(response.statusCode).toBe(201)
    expect(response.body).toStrictEqual({
      id: '12345',
      name: 'Academic Year',
      year: 1994,
    })
  })
})
