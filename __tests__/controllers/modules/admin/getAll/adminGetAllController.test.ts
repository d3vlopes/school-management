import { expect, it, describe } from 'vitest'

import { errorMock } from '@/__tests__/mocks'

import { makeSut } from './helpers'

describe('AdminGetAllController', () => {
  it('should return status code 500 if UseCase throw', async () => {
    const { sut, adminGetAllUseCaseStub } = makeSut()

    const spyOnAdminGetAllUseCase = errorMock(
      adminGetAllUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle()

    expect(spyOnAdminGetAllUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new Error('Internal server error'))
  })

  it('should status code 200 if not error', async () => {
    const { sut } = makeSut()

    const response = await sut.handle()

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      {
        id: '1234',
        name: 'User Name',
        email: 'user@email.com',
        role: 'admin',
        academicTerms: [],
        academicYears: [],
        classLevels: [],
        programs: [],
        students: [],
        teachers: [],
        yearGroups: [],
      },
      {
        id: '4567',
        name: 'User Name 2',
        email: 'user_2@email.com',
        role: 'admin',
        academicTerms: [],
        academicYears: [],
        classLevels: [],
        programs: [],
        students: [],
        teachers: [],
        yearGroups: [],
      },
    ])
  })
})
