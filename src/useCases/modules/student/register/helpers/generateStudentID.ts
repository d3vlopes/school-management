import { generateIdWithPrefix } from '@/useCases/helpers'

export function generateStudentID(name: string) {
  const prefix = 'STU'

  const studentID = generateIdWithPrefix(prefix, name)

  return studentID
}
