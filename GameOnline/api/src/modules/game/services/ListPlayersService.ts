import { injectable, inject } from "tsyringe";
import { IGame } from "../domain/models/IGame";
import { IGameRepository } from "../domain/repositories/IGameRepository";

@injectable()
export default class ListPlayersService {
  constructor(
    @inject("gameRepository")
    private gameRepository: IGameRepository
  ) {}

  public async execute(): Promise<IGame[]> {
    const players = await this.gameRepository.find();

    return players;
  }
}
