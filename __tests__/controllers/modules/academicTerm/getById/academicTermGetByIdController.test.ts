import { it, describe, expect } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { academicTermMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AcademicTermGetByIdController', () => {
  it('should return status code 404 if academic term not found', async () => {
    const { sut, academicTermGetByIdUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicTermGetByIdUseCaseStub,
      'Academic term not found',
    )

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(spyOnUseCase).toBeCalledWith(
      requestMockFactory['invalid-id'].params.id,
    )

    expect(response).toStrictEqual(responseMockFactory['not-found'])
  })

  it('should return status code 500 if UseCase throws', async () => {
    const { sut, academicTermGetByIdUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().errorMock(
      academicTermGetByIdUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(spyOnUseCase).toBeCalledWith(
      requestMockFactory['invalid-id'].params.id,
    )

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if valid data is provided', async () => {
    const { sut, academicTermGetByIdUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicTermGetByIdUseCaseStub,
      academicTermMock,
    )

    const response = await sut.handle(requestMockFactory['valid'])

    expect(spyOnUseCase).toBeCalledWith(
      requestMockFactory['valid'].params.id,
    )

    expect(response).toStrictEqual(responseMockFactory['ok'])
  })
})
