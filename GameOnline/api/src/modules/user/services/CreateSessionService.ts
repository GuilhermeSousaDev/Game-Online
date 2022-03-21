import { IBcryptHashProvider } from "@shared/container/providers/Bcrypt/models/IBcryptHashProvider";
import { IJwtProvider } from "@shared/container/providers/JWT/models/IJwtProvider";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateSession } from "../domain/models/ICreateSession";
import { IPayload } from "../domain/models/IPayload";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class CreateSessionService {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository,

    @inject("jwtProvider")
    private jwtProvider: IJwtProvider,

    @inject("hashProvider")
    private hashProvider: IBcryptHashProvider
  ) {}

  public async execute({ email, password }: ICreateSession): Promise<IPayload> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not Found");
    }

    const comparePassword = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!comparePassword) {
      throw new AppError("Incorrect Password");
    }

    const token = this.jwtProvider.generateToken({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    });

    return {
      user,
      token,
    };
  }
}
