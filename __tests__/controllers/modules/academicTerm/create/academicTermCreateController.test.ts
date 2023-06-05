import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { academicTermMock } from '@/__tests__/mocks/modules'

import { MissingParamError, ServerError } from '@/presentation/errors'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers/makeSut'

describe('AcademicTermCreateController', () => {
  it('should return status code 400 if name is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-name'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  })

  it('should return status code 400 if name is already exists', async () => {
    const { sut, academicTermCreateUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      academicTermCreateUseCaseStub,
      'Academic term already exists with that name',
    )

    const request = requestMockFactory['exists-name']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      name: request.name,
      description: request.description,
      duration: request.duration,
      userId: request.user?.id,
    })

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new Error('Academic term already exists with that name'),
    )
  })

  it('should return status code 400 if description is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-description'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(
      new MissingParamError('description'),
    )
  })

  it('should return status code 400 if duration is not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(
      requestMockFactory['missing-duration'],
    )

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('duration'))
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, academicTermCreateUseCaseStub } = makeSut()

    mockFactory().errorMock(
      academicTermCreateUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle(
      requestMockFactory['invalid-user'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 201 if valid data is provided', async () => {
    const { sut, academicTermCreateUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicTermCreateUseCaseStub,
      academicTermMock,
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)

    expect(spyOnUseCase).toBeCalledWith({
      name: request.name,
      description: request.description,
      duration: request.duration,
      userId: request.user?.id,
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
