import { vitest } from 'vitest'

import { makeSut } from './makeSut'

export const makeSetup = () => {
  const { sut, studentRepositoryStub, validatorStub } = makeSut()

  const spyOnCreate = vitest.spyOn(studentRepositoryStub, 'create')

  const spyOnFindOne = vitest
    .spyOn(studentRepositoryStub, 'findOne')
    .mockResolvedValueOnce(null)

  return {
    sut,
    studentRepositoryStub,
    validatorStub,
    spyOnCreate,
    spyOnFindOne,
  }
}
