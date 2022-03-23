import { ObjectID } from "typeorm";

export interface IUserPayload {
    id: ObjectID,
    name: string;
    avatar: string;
}