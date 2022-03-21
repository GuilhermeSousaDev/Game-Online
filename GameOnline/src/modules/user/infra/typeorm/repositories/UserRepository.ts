import { ICreateUser } from "@modules/user/domain/models/ICreateUser";
import { IUser } from "@modules/user/domain/models/IUser";
import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async save(user: IUser): Promise<IUser> {
    return this.ormRepository.save(user);
  }

  public async remove(user: IUser[]): Promise<void> {
    this.ormRepository.remove(user);
  }

  public async create({ name, email, password }: ICreateUser): Promise<IUser> {
    return this.ormRepository.create({
      name,
      email,
      password,
    });
  }

  public async find(): Promise<IUser[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<IUser> {
    return this.ormRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<IUser> {
    return this.ormRepository.findOne({
      where: {
        email,
      },
    });
  }
}
