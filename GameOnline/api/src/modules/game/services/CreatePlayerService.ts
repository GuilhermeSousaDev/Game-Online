import { inject, injectable } from "tsyringe";
import { IGame } from "../domain/models/IGame";
import { IGameRepository } from "../domain/repositories/IGameRepository";

interface IRequest {
  name: string;
}

@injectable()
export default class CreatePlayerService {
  constructor(
    @inject("gameRepository")
    private gameRepository: IGameRepository
  ) {}

  public async execute({ name }: IRequest): Promise<IGame> {
    const player = await this.gameRepository.create({
      posLeft: Math.floor(Math.random() * 500),
      posRight: Math.floor(Math.random() * 500),
      posX: Math.floor(Math.random() * 500),
      posY: Math.floor(Math.random() * 500),
      name,
    });

    await this.gameRepository.save(player);

    return player;
  }
}
