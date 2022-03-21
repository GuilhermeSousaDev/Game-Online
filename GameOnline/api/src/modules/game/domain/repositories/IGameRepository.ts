import { ICreatePlayer } from "../models/ICreatePlayer";
import { IGame } from "../models/IGame";
import { IUpdatePosition } from "../models/IUpdatePosition";

export interface IGameRepository {
  remove(player: IGame[] | IGame): Promise<void>;
  save(player: IGame): Promise<IGame>;
  create(data: ICreatePlayer): Promise<IGame>;
  updatePosition({
    id,
    posLeft,
    posRight,
    posX,
    posY,
  }: IUpdatePosition): Promise<IGame>;
}
