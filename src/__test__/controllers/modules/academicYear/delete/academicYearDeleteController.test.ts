import { it, expect, describe } from 'vitest'

import { UseCaseStub } from '@/__test__/stubs'

import { AcademicYearDeleteController } from '@/presentation/controllers/modules/academicYear'
import { mockFactory } from '@/__test__/helpers'
import { ServerError } from '@/presentation/errors'

const makeSut = () => {
  const academicYearDeleteUseCaseStub = new UseCaseStub<
    string,
    string
  >()

  const sut = new AcademicYearDeleteController(
    academicYearDeleteUseCaseStub,
  )

  return {
    sut,
    academicYearDeleteUseCaseStub,
  }
}

const requestMockFactory = {
  invalid: {
    params: {
      id: 'invalid_id',
    },
  },
  valid: {
    params: {
      id: 'valid_id',
    },
  },
}

describe('AcademicYearDeleteController', () => {
  it('should return status code 400 if academic year is not found', async () => {
    const { sut, academicYearDeleteUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicYearDeleteUseCaseStub,
      'Academic year not found',
    )

    const response = await sut.handle(requestMockFactory['invalid'])

    expect(spyOnUseCase).toBeCalledWith(
      requestMockFactory['invalid'].params.id,
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error('Academic year not found'),
    )
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicYearDeleteUseCaseStub } = makeSut()

    mockFactory().errorMock(
      academicYearDeleteUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle(requestMockFactory['invalid'])

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if not error', async () => {
    const { sut, academicYearDeleteUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicYearDeleteUseCaseStub,
      'Academic year delete successfully',
    )

    const response = await sut.handle(requestMockFactory['valid'])

    expect(spyOnUseCase).toBeCalledWith(
      requestMockFactory['valid'].params.id,
    )

    expect(response.statusCode).toBe(204)
    expect(response.body).toEqual(null)
  })
})
