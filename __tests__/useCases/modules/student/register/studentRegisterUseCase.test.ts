import { vitest, it, expect, describe } from 'vitest'

import { mockFactory } from '@/__tests__/helpers'

import { generateStudentID } from '@/useCases/modules/student/register/helpers'

import {
  invalidEmailMock,
  invalidNameMock,
  requestMockFactory,
  responseMockFactory,
  emailRegisteredMock,
} from './mocks'

import { makeSetup } from './factories'

vitest.mock('@/useCases/modules/student/register/helpers', () => ({
  generateStudentID: vitest.fn((_) => 'generate_student_id'),
}))

describe('StudentRegisterUseCase', () => {
  it('should return error if email is invalid', async () => {
    const { sut, spyOnCreate } = makeSetup()

    const requestMock = requestMockFactory['invalid-email']

    const spyOnValidator = invalidEmailMock()

    const response = await sut.execute(requestMock)

    expect(spyOnValidator).toBeCalledWith(requestMock.email)

    expect(spyOnCreate).not.toBeCalled()

    expect(response).toStrictEqual(
      responseMockFactory['invalid-email'],
    )
  })

  it('should return error if password length less than 6 characters', async () => {
    const { sut, spyOnCreate, validatorStub } = makeSetup()

    const requestMock = requestMockFactory['invalid-email']

    const spyOnValidator =
      mockFactory().invalidLengthMock(validatorStub)

    const response = await sut.execute(requestMock)

    const input = requestMock.password
    const min = 6
    const max = 30

    expect(spyOnValidator).toBeCalledWith(input, min, max)

    expect(spyOnCreate).not.toBeCalled()

    expect(response).toStrictEqual(
      responseMockFactory['invalid-password'],
    )
  })

  it('should return error if name length less than 3 characters', async () => {
    const { sut, spyOnCreate } = makeSetup()

    const spyOnValidator = invalidNameMock()

    const requestMock = requestMockFactory['invalid-name']

    const response = await sut.execute(requestMock)

    const input = requestMock.name
    const min = 3
    const max = 30

    expect(spyOnValidator).toBeCalledWith(input, min, max)

    expect(spyOnCreate).not.toBeCalled()

    expect(response).toStrictEqual(
      responseMockFactory['invalid-name'],
    )
  })

  it('should return error if email already register', async () => {
    const { sut, spyOnCreate } = makeSetup()

    const spyOnFindOne = emailRegisteredMock()

    const requestMock = requestMockFactory['email-already-register']

    const response = await sut.execute(requestMock)

    expect(spyOnFindOne).toBeCalledWith({
      email: requestMock.email,
    })

    expect(spyOnCreate).not.toBeCalled()

    expect(response).toStrictEqual(
      responseMockFactory['email-already-register'],
    )
  })

  it('should generate student ID', async () => {
    const { sut } = makeSetup()

    const requestMock = requestMockFactory['valid-data']

    await sut.execute(requestMock)

    const studentID = generateStudentID(requestMock.name)

    expect(studentID).toEqual('generate_student_id')
  })

  it('should register a new teacher', async () => {
    const { sut, spyOnCreate } = makeSetup()

    const requestMock = requestMockFactory['valid-data']

    const response = await sut.execute(requestMock)

    expect(spyOnCreate).toBeCalledWith({
      name: requestMock.name,
      email: requestMock.email,
      password: 'password_encrypted',
      studentId: 'generate_student_id',
    })

    expect(response).toStrictEqual(responseMockFactory['success'])
  })
})
