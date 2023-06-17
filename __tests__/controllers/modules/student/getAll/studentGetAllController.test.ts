import { it, describe, expect } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { studentsMock } from '@/__tests__/mocks/modules'

import { responseMockFactory } from './mocks'

import { makeSut } from './helpers'

describe('StudentGetAllController', () => {
  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().errorMock(
      useCaseStub,
      'execute' as never,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toBeCalled()

    expect(response).toStrictEqual(
      responseMockFactory['server-error'],
    )
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      studentsMock,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toBeCalled()

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
