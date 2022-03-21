import { ObjectID } from "typeorm";

export interface ICreatePlayer {
  userId: ObjectID;
  posX: number;
  posY: number;
  posLeft: number;
  posRight: number;
}