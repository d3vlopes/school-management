import { it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { teachersMock } from '@/__tests__/mocks/modules'

import { ServerError } from '@/presentation/errors'

import { makeSut } from './helpers'

describe('TeacherGetAllController', () => {
  it('should return status code 500 if UseCase throw', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().errorMock(
      useCaseStub,
      'execute' as never,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toBeCalled()

    expect(response).toStrictEqual({
      statusCode: 500,
      body: new ServerError(),
    })
  })

  it('should return status code 200 if UseCase return success', async () => {
    const { sut, useCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      useCaseStub,
      teachersMock,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toBeCalled()

    expect(response).toStrictEqual({
      statusCode: 200,
      body: [
        {
          id: '1235478',
          name: 'Teacher Mock',
          email: 'email@provider.com',
          teacherId: 'generate_teacher_id',
          dateEmployed: new Date(23, 5),
          isWithdrawn: false,
          isSuspended: false,
          role: 'teacher',
          applicationStatus: 'pending',
          createdBy: 'admin_id',
          createdAt: new Date(23, 5),
        },
        {
          id: '96587456',
          name: 'Teacher Mock 2',
          email: 'teacher@provider.com',
          teacherId: 'generate_teacher_id',
          dateEmployed: new Date(25, 6),
          isWithdrawn: false,
          isSuspended: false,
          role: 'teacher',
          applicationStatus: 'pending',
          createdBy: 'admin_id',
          createdAt: new Date(15, 5),
        },
      ],
    })
  })
})
