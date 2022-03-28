import gameRouter from "@modules/game/infra/http/routes/game.routes";
import { Router } from "express";

const router = Router();

router.use("/game", gameRouter);

export default router;
