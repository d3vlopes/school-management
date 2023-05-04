export interface IEncrypter {
  encrypt(value: string): Promise<string>
  compare(value: string, password: string): Promise<boolean>
}
