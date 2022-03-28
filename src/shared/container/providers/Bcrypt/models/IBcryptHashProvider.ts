export interface IBcryptHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(password: string, hash: string): Promise<boolean>;
}
