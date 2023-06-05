import { expect, it, describe } from 'vitest'

import { UseCaseStub } from '@/__tests__/stubs'
import { errorMock, useCaseSuccessMock } from '@/__tests__/mocks'
import { academicYearsMock } from '@/__tests__/mocks/modules'

import { AcademicYearModel } from '@/core/models'

import { AcademicYearGetAllController } from '@/presentation/controllers/modules/academicYear'

import { ServerError } from '@/presentation/errors'

const makeSut = () => {
  const academicYearGetAllUseCaseStub = new UseCaseStub<
    null,
    AcademicYearModel[]
  >()

  const sut = new AcademicYearGetAllController(
    academicYearGetAllUseCaseStub,
  )

  return {
    sut,
    academicYearGetAllUseCaseStub,
  }
}

describe('AcademicYearGetAllController', () => {
  it('should return status code 500 if UseCase throws', async () => {
    const { sut, academicYearGetAllUseCaseStub } = makeSut()

    const useCaseStub = errorMock(
      academicYearGetAllUseCaseStub,
      'execute' as never,
    )

    const response = await sut.handle()

    expect(useCaseStub).toHaveBeenCalled()

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(new ServerError())
  })

  it('should return status code 200 if not error', async () => {
    const { sut, academicYearGetAllUseCaseStub } = makeSut()

    const useCaseStub = useCaseSuccessMock(
      academicYearGetAllUseCaseStub,
      academicYearsMock,
    )

    const response = await sut.handle()

    expect(useCaseStub).toHaveBeenCalled()

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([
      {
        id: '12345',
        name: 'Academic Year',
        year: 1994,
        createdBy: 'user_id',
        isCurrent: false,
        students: [],
        teachers: [],
      },
      {
        id: '67898',
        name: 'Academic Year 2',
        year: 1994,
        createdBy: 'user_id',
        isCurrent: false,
        students: [],
        teachers: [],
      },
    ])
  })
})
