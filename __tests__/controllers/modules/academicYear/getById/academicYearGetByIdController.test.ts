import { it, describe, expect } from 'vitest'

import {
  errorMock,
  useCaseErrorMock,
  useCaseSuccessMock,
} from '@/__tests__/mocks'

import { academicYearMock } from '@/__tests__/mocks/modules'

import { ServerError } from '@/presentation/errors'

import { ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE } from '@/useCases/constants/errors/academicYear'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AcademicYearGetByIdController', () => {
  it('should return status 400 if academic year not found', async () => {
    const { sut, academicYearGetByIdUseCaseStub } = makeSut()

    const spyOnUseCase = useCaseErrorMock(
      academicYearGetByIdUseCaseStub,
      ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE,
    )

    const request = requestMockFactory['invalid-id']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith(request.params.id)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error(ACADEMIC_YEAR_NOT_FOUND_ERROR_MESSAGE),
    )
  })

  it('should return status code 500 if UseCase throws', async () => {
    const { sut, academicYearGetByIdUseCaseStub } = makeSut()

    const spyOnUseCase = errorMock(
      academicYearGetByIdUseCaseStub,
      'execute' as never,
    )

    const request = requestMockFactory['invalid-id']

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(spyOnUseCase).toBeCalledWith(request.params.id)

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if not error', async () => {
    const { sut, academicYearGetByIdUseCaseStub } = makeSut()

    const useCaseStub = useCaseSuccessMock(
      academicYearGetByIdUseCaseStub,
      academicYearMock,
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)

    expect(useCaseStub).toHaveBeenCalledWith(request.params.id)

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
