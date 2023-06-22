import {
  Adapters,
  AdaptersFactory,
  Repositories,
  RepositoriesFactory,
} from '@/main/factories/shared'

export class ContainerFactory {
  static createRepository(repository: Repositories) {
    return RepositoriesFactory.make(repository)
  }

  static createAdapter(adapter: Adapters) {
    return AdaptersFactory.make(adapter)
  }
}
