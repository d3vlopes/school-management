import { vitest, it, expect, describe } from 'vitest'

import { teacherRepositoryStub } from '@/__tests__/stubs'
import { mockFactory } from '@/__tests__/helpers'
import { teacherMock } from '@/__tests__/mocks/modules'

import { TeacherGetByIdUseCase } from '@/useCases/modules/teacher'

describe('TeacherGetByIdUseCase', () => {
  it('should return error if teacher not found', async () => {
    const sut = new TeacherGetByIdUseCase(teacherRepositoryStub)

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

  it('should throw if TeacherRepository throws', async () => {
    const sut = new TeacherGetByIdUseCase(teacherRepositoryStub)

    mockFactory().errorMock(teacherRepositoryStub, 'findOne' as never)

    const response = sut.execute('invalid_teacher_id')

    await expect(response).rejects.toThrow()
  })

  it('should get teacher by id', async () => {
    const sut = new TeacherGetByIdUseCase(teacherRepositoryStub)

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
