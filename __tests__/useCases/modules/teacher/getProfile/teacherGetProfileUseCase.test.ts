import { vitest, it, describe, expect } from 'vitest'

import { teacherRepositoryStub } from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'
import { teacherMock } from '@/__tests__/mocks/modules'

import { TeacherGetProfileUseCase } from '@/useCases/modules/teacher'

describe('TeacherGetProfileUseCase', () => {
  it('should return error if teacher not found', async () => {
    const sut = new TeacherGetProfileUseCase(teacherRepositoryStub)

    const spyOnTeacherRepository = vitest
      .spyOn(teacherRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute('invalid_teacher_id')

    expect(spyOnTeacherRepository).toBeCalledWith({
      id: 'invalid_teacher_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Teacher not found',
    })
  })

  it('should throw if AdminRepository throws', async () => {
    const sut = new TeacherGetProfileUseCase(teacherRepositoryStub)

    mockFactory().errorMock(teacherRepositoryStub, 'findOne' as never)

    const promise = sut.execute('invalid_teacher_i')

    await expect(promise).rejects.toThrow()
  })

  it('should get teacher profile info', async () => {
    const sut = new TeacherGetProfileUseCase(teacherRepositoryStub)

    const spyOnTeacherRepository = vitest.spyOn(
      teacherRepositoryStub,
      'findOne',
    )

    const response = await sut.execute('valid_teacher_id')

    expect(spyOnTeacherRepository).toBeCalledWith({
      id: 'valid_teacher_id',
    })

    expect(response).toStrictEqual({
      data: teacherMock,
      error: null,
    })
  })
})
