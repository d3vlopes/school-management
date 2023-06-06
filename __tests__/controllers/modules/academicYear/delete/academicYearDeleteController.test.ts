import { it, expect, describe } from 'vitest'

import { UseCaseStub } from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'

import { AcademicYearDeleteController } from '@/presentation/controllers/modules/academicYear'
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
    user: {
      id: 'user_id',
    },
  },
  valid: {
    params: {
      id: 'valid_id',
    },
    user: {
      id: 'user_id',
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

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMockFactory['invalid'].params.id,
      userId: requestMockFactory['invalid'].user.id,
    })

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

  it('should return status code 204 if not error', async () => {
    const { sut, academicYearDeleteUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicYearDeleteUseCaseStub,
      'Academic year delete successfully',
    )

    const response = await sut.handle(requestMockFactory['valid'])

    expect(spyOnUseCase).toBeCalledWith({
      id: requestMockFactory['valid'].params.id,
      userId: requestMockFactory['invalid'].user.id,
    })

    expect(response.statusCode).toBe(204)
    expect(response.body).toEqual(null)
  })
})
