import { IGameRepository } from "@modules/game/domain/repositories/IGameRepository";
import GameRepository from "@modules/game/infra/typeorm/repositories/GameRepository";
import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";
import UserRepository from "@modules/user/infra/typeorm/repositories/UserRepository";
import { container } from "tsyringe";

import "./providers/Bcrypt";
import "./providers/JWT";

container.registerSingleton<IUserRepository>("userRepository", UserRepository);
container.registerSingleton<IGameRepository>("gameRepository", GameRepository);
