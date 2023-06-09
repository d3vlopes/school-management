import { generateIdWithPrefix } from '@/useCases/helpers'

export function generateTeacherID(name: string) {
  const prefix = 'TEA'

  const teacherID = generateIdWithPrefix(prefix, name)

  return teacherID
}
