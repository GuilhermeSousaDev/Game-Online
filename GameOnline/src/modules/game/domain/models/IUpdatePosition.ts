import { ObjectID } from "typeorm";

export interface IUpdatePosition {
    id: ObjectID;
    posX?: number;
    posY?: number;
    posLeft?: number;
    posRight?: number;
}