import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreatePlayer } from "../domain/models/ICreatePlayer";
import { IGame } from "../domain/models/IGame";
import { IGameRepository } from "../domain/repositories/IGameRepository";

@injectable()
export default class CreatePlayerService {
  constructor(
    @inject("gameRepository")
    private gameRepository: IGameRepository
  ) {}

  public async execute({
    posLeft,
    posRight,
    posX,
    posY,
    userId,
  }: ICreatePlayer): Promise<IGame> {
    const userExists = await this.gameRepository.findUserById(userId);

    if (userExists) {
      throw new AppError("This User already exists");
    }

    const player = await this.gameRepository.create({
      posLeft,
      posRight,
      posX,
      posY,
      userId,
    });

    await this.gameRepository.save(player);

    return player;
  }
}
