import {
  AdminRepository,
  AcademicYearRepository,
  AcademicTermRepository,
  TeacherRepository,
  StudentRepository,
} from '@/infra/database/mongoDB/repositories'

export enum Repositories {
  ADMIN,
  ACADEMIC_YEAR,
  ACADEMIC_TERM,
  TEACHER,
  STUDENT,
}

export class RepositoriesFactory {
  static make(repository: Repositories) {
    switch (repository) {
      case Repositories.ADMIN:
        return new AdminRepository()

      case Repositories.ACADEMIC_YEAR:
        return new AcademicYearRepository()

      case Repositories.ACADEMIC_TERM:
        return new AcademicTermRepository()

      case Repositories.TEACHER:
        return new TeacherRepository()

      case Repositories.STUDENT:
        return new StudentRepository()
    }
  }
}
