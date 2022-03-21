import { auth } from "@config/auth";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { ICreateToken } from "../models/ICreateToken";
import { IJwtProvider } from "../models/IJwtProvider";

export default class JwtProvider implements IJwtProvider {
  public generateToken({ id, name, avatar }: ICreateToken): string {
    return sign(
      {
        id,
        name,
        avatar,
      },
      auth.secret,
      { expiresIn: auth.expiresIn },
    );
  }

  public verifyToken(token: string): string | JwtPayload {
    return verify(token, auth.expiresIn);
  }
}