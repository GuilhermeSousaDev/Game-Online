import { IGameRepository } from "@modules/game/domain/repositories/IGameRepository";
import GameRepository from "@modules/game/infra/typeorm/repositories/GameRepository";
import { container } from "tsyringe";

import "./providers/Bcrypt";
import "./providers/JWT";

container.registerSingleton<IGameRepository>("gameRepository", GameRepository);
