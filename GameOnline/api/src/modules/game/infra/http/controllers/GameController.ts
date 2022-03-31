import CreatePlayerService from "@modules/game/services/CreatePlayerService";
import DeletePlayersService from "@modules/game/services/DeletePlayersService";
import ListPlayersService from "@modules/game/services/ListPlayersService";
import UpdatePositionService from "@modules/game/services/UpdatePositionService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class GameController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listPlayers = container.resolve(ListPlayersService);

    const players = await listPlayers.execute();

    return res.json(players);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createPlayer = container.resolve(CreatePlayerService);

    const player = await createPlayer.execute({ name });

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

  public async delete(req: Request, res: Response): Promise<Response> {
    const deletePlayers = container.resolve(DeletePlayersService);

    await deletePlayers.execute();

    return res.json([]);
  }
}
