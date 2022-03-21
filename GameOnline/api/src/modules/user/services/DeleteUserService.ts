import { injectable, inject } from "tsyringe";
import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";
import AppError from "@shared/errors/AppError";

@injectable()
export default class DeleteUserService {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User not found");
    }

    await this.userRepository.remove(user);
  }
}
