import { prismaClient } from "@repo/db/client";
import { type Request, type Response } from "express";
import { createWebsiteSchema } from "@/schema/createWebsiteSchema";
import { websiteRequestQuerySchema } from "@/schema/websiteTicksSchema";
import { destroyWebsiteQuerySchema } from "@/schema/destroyWebsiteSchema";

export const createWebsiteController = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const body = req.body;

  const validatedBody = createWebsiteSchema.safeParse(body);

  if (!validatedBody.success) {
    res.status(400).json({
      error: validatedBody.error.issues.map((issue) => issue.message),
    });
    return;
  }

  const { name, url } = validatedBody.data;

  const website = await prismaClient.website.create({
    data: {
      name,
      userId,
      url,
    },
  });

  res.status(200).json({ id: website.id });
};

export const websiteStatusController = async (req: Request, res: Response) => {
  const userId = req.userId!;
  const query = req.query;

  const queryValidation = websiteRequestQuerySchema.safeParse(query);
  if (!queryValidation.success) {
    res.status(400).json({
      error: queryValidation.error.issues.map((issue) => issue.message),
    });
    return;
  }

  const { websiteId } = queryValidation.data;

  const websiteTicks = await prismaClient.website.findFirst({
    where: {
      id: websiteId,
      userId: userId,
    },
    include: {
      ticks: true,
    },
  });

  res.status(200).json(websiteTicks);
};

export const websiteListController = async (req: Request, res: Response) => {
  const userId = req.userId;

  const websites = await prismaClient.website.findMany({
    where: {
      userId,
      disabled: false,
    },
  });

  res.json(websites);
};

export const destroyWebsiteController = async (req: Request, res: Response) => {
  const userId = req.userId;
  const query = req.query;

  const queryValidation = destroyWebsiteQuerySchema.safeParse(query);
  if (!queryValidation.success) {
    res.status(400).json({
      error: queryValidation.error.issues.map((issue) => issue.message),
    });
    return;
  }

  const { websiteId } = queryValidation.data;

  await prismaClient.website.update({
    where: {
      id: websiteId,
      userId,
    },
    data: {
      disabled: true,
    },
  });

  res.status(200).json({
    message: "Website Deleted Successfully",
  });
};
