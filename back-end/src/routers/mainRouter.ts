import { Router } from "express";
import authRouter from "./authRouter";

import districtsRouter from "./districtsRouter";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(districtsRouter);

export default mainRouter;