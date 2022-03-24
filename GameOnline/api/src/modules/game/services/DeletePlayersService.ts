import { injectable, inject } from "tsyringe";
import { IGameRepository } from "../domain/repositories/IGameRepository";

@injectable()
export default class DeletePlayersService {
  constructor(
    @inject("gameRepository")
    private gameRepository: IGameRepository
  ) {}

  public async execute(): Promise<void> {
    const players = await this.gameRepository.find();

    await this.gameRepository.remove(players);
  }
}
