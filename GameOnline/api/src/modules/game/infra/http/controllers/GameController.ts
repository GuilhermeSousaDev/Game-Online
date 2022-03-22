import CreatePlayerService from "@modules/game/services/CreatePlayerService";
import UpdatePositionService from "@modules/game/services/UpdatePositionService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class GameController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { posLeft, posRight, posX, posY, userId } = req.body;

    const createPlayer = container.resolve(CreatePlayerService);

    const player = await createPlayer.execute({
      posLeft,
      posRight,
      posX,
      posY,
      userId,
    });

    return res.json(player);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, posLeft, posRight, posX, posY } = req.body;

    const updatePosition = container.resolve(UpdatePositionService);

    const playerPosition = await updatePosition.execute({
      id,
      posLeft,
      posRight,
      posX,
      posY,
    });

    return res.json(playerPosition);
  }
}
