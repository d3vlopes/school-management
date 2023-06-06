import { it, describe, expect } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { ServerError } from '@/presentation/errors'

import { requestMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AcademicTermDeleteController', () => {
  it('should return status code 404 if academic year is not found', async () => {
    const { sut, academicTermDeleteUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicTermDeleteUseCaseStub,
      'Academic term not found',
    )

    const request = requestMockFactory['invalid-id']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      id: request.params.id,
      userId: request.user.id,
    })

    expect(response).toStrictEqual({
      statusCode: 404,
      body: new Error('Academic term not found'),
    })
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicTermDeleteUseCaseStub } = makeSut()

    mockFactory().errorMock(
      academicTermDeleteUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-user-id'],
    )

    expect(response).toStrictEqual({
      statusCode: 500,
      body: new ServerError(),
    })
  })

  it('should return status code 204 if not error', async () => {
    const { sut, academicTermDeleteUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicTermDeleteUseCaseStub,
      'Academic term delete successfully',
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      id: request.params.id,
      userId: request.user.id,
    })

    expect(response).toStrictEqual({
      statusCode: 204,
      body: null,
    })
  })
})
