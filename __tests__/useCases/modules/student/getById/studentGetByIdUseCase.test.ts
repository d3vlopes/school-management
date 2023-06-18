import { vitest, it, expect, describe } from 'vitest'

import { studentRepositoryStub } from '@/__tests__/stubs'
import { studentMock } from '@/__tests__/mocks/modules'

import { StudentGetByIdUseCase } from '@/useCases/modules/student'

describe('StudentGetByIdUseCase', () => {
  it('should return error if student not found', async () => {
    const sut = new StudentGetByIdUseCase(studentRepositoryStub)

    const spyOnStudentRepository = vitest
      .spyOn(studentRepositoryStub, 'findOne')
      .mockResolvedValueOnce(null)

    const response = await sut.execute('invalid_student_id')

    expect(spyOnStudentRepository).toBeCalledWith({
      id: 'invalid_student_id',
    })

    expect(response).toStrictEqual({
      data: null,
      error: 'Student not found',
    })
  })

  it('should get student by id', async () => {
    const sut = new StudentGetByIdUseCase(studentRepositoryStub)

    const spyOnStudentRepository = vitest.spyOn(
      studentRepositoryStub,
      'findOne',
    )

    const response = await sut.execute('valid_student_id')

    expect(spyOnStudentRepository).toBeCalledWith({
      id: 'valid_student_id',
    })

    expect(response).toStrictEqual({
      data: studentMock,
      error: null,
    })
  })
})
