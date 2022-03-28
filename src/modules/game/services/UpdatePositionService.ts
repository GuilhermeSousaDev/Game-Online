import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IGame } from "../domain/models/IGame";
import { IUpdatePosition } from "../domain/models/IUpdatePosition";
import { IGameRepository } from "../domain/repositories/IGameRepository";

@injectable()
export default class UpdatePositionService {
  constructor(
    @inject("gameRepository")
    private gameRepository: IGameRepository
  ) {}

  public async execute({
    id,
    posLeft,
    posRight,
    posX,
    posY,
  }: IUpdatePosition): Promise<IGame> {
    const player = await this.gameRepository.findById(id);

    if (!player) {
      throw new AppError("Player not found");
    }

    player.posLeft = posLeft;
    player.posRight = posRight;
    player.posX = posX;
    player.posY = posY;

    await this.gameRepository.save(player);

    return player;
  }
}
