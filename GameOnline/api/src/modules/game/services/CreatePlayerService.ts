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
    name,
  }: ICreatePlayer): Promise<IGame> {
    const player = await this.gameRepository.create({
      posLeft,
      posRight,
      posX,
      posY,
      name,
    });

    await this.gameRepository.save(player);

    return player;
  }
}
