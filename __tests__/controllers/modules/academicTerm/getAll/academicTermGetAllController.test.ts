import { it, expect, describe } from 'vitest'

import { UseCaseStub } from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'
import { academicTermsMock } from '@/__tests__/mocks/modules'

import { AcademicTermModel } from '@/core/models'

import { ServerError } from '@/presentation/errors'

import { AcademicTermGetAllController } from '@/presentation/controllers/modules/academicTerm'

const makeSut = () => {
  const academicTermGetAllUseCaseStub = new UseCaseStub<
    null,
    AcademicTermModel[]
  >()

  const sut = new AcademicTermGetAllController(
    academicTermGetAllUseCaseStub,
  )

  return {
    sut,
    academicTermGetAllUseCaseStub,
  }
}

describe('AcademicTermGetAllController', () => {
  it('should return status code 500 if UseCase throws', async () => {
    const { sut, academicTermGetAllUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().errorMock(
      academicTermGetAllUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if not error', async () => {
    const { sut, academicTermGetAllUseCaseStub } = makeSut()

    const spyOnUseCase = mockFactory().useCaseSuccessMock(
      academicTermGetAllUseCaseStub,
      academicTermsMock,
    )

    const response = await sut.handle()

    expect(spyOnUseCase).toHaveBeenCalled()

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      {
        id: '123456',
        name: 'Academic Term',
        description: 'Loren ipsum dolor',
        duration: '3 mês',
        createdBy: 'admin_id',
        createdAt: new Date(23, 5),
      },
      {
        id: '123456',
        name: 'Academic Term 2',
        description: 'Loren ipsum dolor',
        duration: '6 mês',
        createdBy: 'admin_id',
        createdAt: new Date(26, 5),
      },
    ])
  })
})
