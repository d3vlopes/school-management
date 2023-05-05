import bcrypt from 'bcrypt'

import { IEncrypter } from '@/useCases/contracts/adapters'

export class BcryptAdapter implements IEncrypter {
  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, 12)

    return hash
  }

  async compare(value: string, password: string): Promise<boolean> {
    const isCheck = await bcrypt.compare(value, password)

    return isCheck
  }
}
