import { Router } from "express";
import websiteRouter from "@/routes/api/v1/website";
import webhookRouter from "./webhook";

const v1Router = Router();

v1Router.use("/website", websiteRouter);
v1Router.use("/webhooks", webhookRouter);

export default v1Router;
