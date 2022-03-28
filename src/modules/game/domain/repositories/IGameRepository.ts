import { ObjectID } from "typeorm";
import { ICreatePlayer } from "../models/ICreatePlayer";
import { IGame } from "../models/IGame";

export interface IGameRepository {
  remove(player: IGame[] | IGame): Promise<void>;
  save(player: IGame): Promise<IGame>;
  create(data: ICreatePlayer): Promise<IGame>;
  find(): Promise<IGame[]>;
  findById(id: ObjectID): Promise<IGame>;
}