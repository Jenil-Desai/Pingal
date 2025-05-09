import { Router } from "express";
import {
  createWebsiteController,
  destroyWebsiteController,
  websiteListController,
  websiteStatusController,
} from "@/controller/website";
import { authMiddleware } from "@/middlewares/auth";

const websiteRouter = Router();

websiteRouter.post("/", authMiddleware, createWebsiteController);
websiteRouter.get("/status", authMiddleware, websiteStatusController);
websiteRouter.get("/list", authMiddleware, websiteListController);
websiteRouter.delete("/", authMiddleware, destroyWebsiteController);

export default websiteRouter;
