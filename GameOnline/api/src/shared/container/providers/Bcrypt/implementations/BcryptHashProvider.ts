import { compare, hash } from "bcryptjs";
import { IBcryptHashProvider } from "../models/IBcryptHashProvider";

export default class BcryptHashProvider implements IBcryptHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return await hash(payload, 8);
  }

  public async compareHash(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }
}
