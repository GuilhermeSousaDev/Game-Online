import { ICreateUser } from "../models/ICreateUser";
import { IUser } from "../models/IUser";

export interface IUserRepository {
    save(user: IUser): Promise<IUser>;
    remove(user: IUser[] | IUser): Promise<void>;
    create(data: ICreateUser): Promise<IUser>;
    find(): Promise<IUser[]>;
    findById(id: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
}