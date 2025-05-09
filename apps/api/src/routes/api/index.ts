import { Router } from "express";
import v1Router from "@/routes/api/v1/index";

const apiRouter = Router();

apiRouter.use("/v1", v1Router);

export default apiRouter;
