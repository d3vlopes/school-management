import { vitest, it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'
import { teacherRepositoryStub } from '@/__tests__/stubs'
import { teachersMock } from '@/__tests__/mocks/modules'

import { TeacherGetAllUseCase } from '@/useCases/modules/teacher'

describe('TeacherGetAllUseCase', () => {
  it('should throw if AdminRepository throws', async () => {
    const sut = new TeacherGetAllUseCase(teacherRepositoryStub)

    mockFactory().errorMock(teacherRepositoryStub, 'findAll' as never)

    const response = sut.execute()

    await expect(response).rejects.toThrow()
  })

  it('should get all teachers', async () => {
    const sut = new TeacherGetAllUseCase(teacherRepositoryStub)

    const spyOnTeacherRepository = vitest.spyOn(
      teacherRepositoryStub,
      'findAll',
    )

    const response = await sut.execute()

    expect(spyOnTeacherRepository).toBeCalled()

    expect(response).toStrictEqual({
      data: teachersMock,
      error: null,
    })
  })
})
