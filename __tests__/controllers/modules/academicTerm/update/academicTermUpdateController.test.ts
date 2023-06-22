import { it, expect, describe } from 'vitest'

import { academicTermMock } from '@/__tests__/mocks/modules'
import { mockFactory } from '@/__tests__/helpers'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('AcademicTermUpdateController', () => {
  it('should return status code 400 if name already exists', async () => {
    const { sut, academicTermUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicTermUpdateUseCaseStub,
      'Academic term already exists with that name',
    )

    const request = requestMockFactory['exists-name']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      id: request.params.id,
      name: request.name,
    })

    expect(response).toStrictEqual(responseMockFactory['exists-name'])
  })

  it('should return status code 400 if academic term not found', async () => {
    const { sut, academicTermUpdateUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicTermUpdateUseCaseStub,
      'Academic term not found',
    )

    const request = requestMockFactory['invalid-id']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      id: request.params.id,
      name: request.name,
    })

    expect(response).toStrictEqual(responseMockFactory['not-found'])
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicTermUpdateUseCaseStub } = makeSut()

    mockFactory().errorMock(
      academicTermUpdateUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if valid data is provided', async () => {
    const { sut, academicTermUpdateUseCaseStub } = makeSut()

    const updateAcademicTerm = {
      ...academicTermMock,
      name: 'valid_academic_term_name',
    }

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicTermUpdateUseCaseStub,
      updateAcademicTerm,
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      id: request.params.id,
      name: request.name,
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
