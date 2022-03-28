import { ObjectID } from 'typeorm';

export interface IGame {
    id: ObjectID;
    posX: number;
    posY: number;
    posLeft: number;
    posRight: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}