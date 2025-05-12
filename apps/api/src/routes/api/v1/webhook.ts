import { webhookController } from "@/controller/webhook";
import { Router } from "express";

const webhookRouter = Router();

webhookRouter.post("/", webhookController);

export default webhookRouter;
