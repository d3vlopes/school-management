import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { studentMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('StudentGetByIdController', () => {
  it('should return status code 404 if student not found', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Student not found',
    )

    const requestMock = requestMockFactory['invalid-student']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith(requestMock.params.id)

    expect(response).toStrictEqual(responseMockFactory['not-found'])
  })

  it('should return status code 500 if UseCase throws', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().errorMock(
      useCaseStub,
      'execute' as never,
    )

    const requestMock = requestMockFactory['invalid-student']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith(requestMock.params.id)

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      studentMock,
    )

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith(requestMock.params.id)

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
