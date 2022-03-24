import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import GameController from "../controllers/GameController";

const gameRouter = Router();
const gameController = new GameController();

gameRouter.get("/", gameController.index);

gameRouter.post(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      posLeft: Joi.number().required(),
      posRight: Joi.number().required(),
      posX: Joi.number().required(),
      posY: Joi.number().required(),
      userId: Joi.string().required(),
    },
  }),
  gameController.create
);

gameRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      posLeft: Joi.number().required(),
      posRight: Joi.number().required(),
      posX: Joi.number().required(),
      posY: Joi.number().required(),
    },
  }),
  gameController.update
);

gameRouter.delete("/", gameController.delete);

export default gameRouter;
