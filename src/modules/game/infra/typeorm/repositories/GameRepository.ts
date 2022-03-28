import { getRepository, ObjectID, Repository } from "typeorm";
import Game from "../entities/Game";
import { IGame } from "@modules/game/domain/models/IGame";
import { IGameRepository } from "@modules/game/domain/repositories/IGameRepository";
import { ICreatePlayer } from "@modules/game/domain/models/ICreatePlayer";

export default class GameRepository implements IGameRepository {
  private ormRepository: Repository<Game>;

  constructor() {
    this.ormRepository = getRepository(Game);
  }

  public async save(player: IGame): Promise<IGame> {
    return this.ormRepository.save(player);
  }

  public async remove(player: IGame[]): Promise<void> {
    this.ormRepository.remove(player);
  }

  public async create(data: ICreatePlayer): Promise<IGame> {
    return this.ormRepository.create(data);
  }

  public async find(): Promise<IGame[]> {
    return this.ormRepository.find();
  }

  public async findById(id: ObjectID): Promise<IGame> {
    return this.ormRepository.findOne(id);
  }
}
