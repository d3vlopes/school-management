import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { teacherMock } from '@/__tests__/mocks/modules'

import { requestMockFactory, responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('TeacherGetProfileController', () => {
  it('should return status code 404 if teacher not found', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseErrorMock(
      useCaseStub,
      'Teacher not found',
    )

    const requestMock = requestMockFactory['invalid-teacher']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith(requestMock.user.id)

    expect(response).toStrictEqual(responseMockFactory['not-found'])
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    mockFactory().errorMock(useCaseStub, 'execute' as never)

    const requestMock = requestMockFactory['invalid-teacher']

    const response = await sut.handle(requestMock)

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      teacherMock,
    )

    const requestMock = requestMockFactory['valid-teacher']

    const response = await sut.handle(requestMock)

    expect(spyOnUseCase).toBeCalledWith(requestMock.user.id)

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
