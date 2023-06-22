import { it, describe, expect } from 'vitest'

import {
  errorMock,
  useCaseSuccessMock,
  useCaseErrorMock,
} from '@/__tests__/mocks'

import { academicYearMock } from '@/__tests__/mocks/modules'

import { ServerError } from '@/presentation/errors'

import {
  ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
  ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
  ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
} from '@/useCases/constants/errors/academicYear'

import { makeSut } from './helpers'

import { requestMockFactory, responseMockFactory } from './mocks'

describe('AcademicYearUpdateController', () => {
  it('should return status code 400 if name is invalid', async () => {
    const { sut, academicYearUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearUpdateUseCaseStub,
      ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE,
    )

    const request = requestMockFactory['invalid-name']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toHaveBeenCalledWith({
      id: request.params?.id,
      userId: request.user?.id,
      name: request.name,
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_INVALID_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if name already exists', async () => {
    const { sut, academicYearUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearUpdateUseCaseStub,
      ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE,
    )

    const request = requestMockFactory['exists-name']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toHaveBeenCalledWith({
      id: request.params?.id,
      userId: request.user?.id,
      name: request.name,
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_EXISTS_NAME_ERROR_MESSAGE),
    )
  })

  it('should return status code 400 if year is invalid', async () => {
    const { sut, academicYearUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearUpdateUseCaseStub,
      ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE,
    )

    const request = requestMockFactory['invalid-year']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toHaveBeenCalledWith({
      id: request.params?.id,
      userId: request.user?.id,
      year: request.year,
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_INVALID_YEAR_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicYearUpdateUseCaseStub } = makeSut()

    errorMock(academicYearUpdateUseCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-year'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if valid data is provided', async () => {
    const { sut, academicYearUpdateUseCaseStub } = makeSut()

    const updateAcademicYear = {
      ...academicYearMock,
      name: 'Academic Year Update',
    }

    const spyOnUseCase = useCaseSuccessMock(
      academicYearUpdateUseCaseStub,
      updateAcademicYear,
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toHaveBeenCalledWith({
      id: request.params?.id,
      userId: request.user?.id,
      name: request.name,
      isCurrent: request.isCurrent,
    })

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
