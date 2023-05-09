import { IEncrypter } from '@/useCases/contracts/adapters'

class EncrypterStub implements IEncrypter {
  async encrypt(value: string): Promise<string> {
    return 'password_encrypted'
  }

  async compare(value: string, password: string): Promise<boolean> {
    return true
  }
}

export const encrypterStub = new EncrypterStub()
