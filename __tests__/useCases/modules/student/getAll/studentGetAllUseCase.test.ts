import { vitest, it, expect, describe } from 'vitest'

import { studentRepositoryStub } from '@/__tests__/stubs'
import { studentsMock } from '@/__tests__/mocks/modules'

import { StudentGetAllUseCase } from '@/useCases/modules/student'

describe('StudentGetAllUseCase', () => {
  it('should get all students', async () => {
    const sut = new StudentGetAllUseCase(studentRepositoryStub)

    const spyOnStudentRepository = vitest.spyOn(
      studentRepositoryStub,
      'findAll',
    )

    const response = await sut.execute()

    expect(spyOnStudentRepository).toBeCalled()

    expect(response).toStrictEqual({
      data: studentsMock,
      error: null,
    })
  })
})
