import { vitest, expect, it, describe } from 'vitest'

import { errorMock } from '@/__tests__/mocks'

import { requestMockFactory, responseMockFactory } from './mocks'
import { makeSut } from './helpers'

describe('AdminGetProfileController', () => {
  it('should return status code 400 if admin not found', async () => {
    const { sut, adminGetProfileUseCaseStub } = makeSut()

    const spyOnAdminGetProfileUseCaseStub = vitest
      .spyOn(adminGetProfileUseCaseStub, 'execute')
      .mockResolvedValueOnce({
        data: null,
        error: 'Admin not found',
      })

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(spyOnAdminGetProfileUseCaseStub).toHaveBeenCalledTimes(1)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new Error('Admin not found'))
  })

  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminGetProfileUseCaseStub } = makeSut()

    errorMock(adminGetProfileUseCaseStub, 'execute' as never)

    const response = await sut.handle(
      requestMockFactory['invalid-id'],
    )

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new Error('Internal server error'))
  })

  it('should return status code 200 if valid data is provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockFactory['valid'])

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(
      responseMockFactory['success'],
    )
  })
})
