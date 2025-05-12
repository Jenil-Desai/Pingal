import { type WebhookEvent } from "@clerk/express/webhooks";
import { prismaClient } from "@repo/db/client";
import type { Request, Response } from "express";
import { Webhook } from "svix";

export async function webhookController(req: Request, res: Response) {
  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    res.status(400).json({ success: false, error: "Missing webhook headers" });
    return;
  }

  const payload = req.body;
  const body = JSON.stringify(payload);

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET!);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return res.status(400).json({ error: "Error verifying webhook" });
  }

  const eventType = evt.type;

  switch (eventType) {
    case "user.created": {
      try {
        await prismaClient.user.create({
          data: {
            clerkId: evt.data.id,
            email: evt.data.email_addresses[0].email_address
          }
        });
        res.status(200).json({ success: true, eventType });
        return;
      } catch (err) {
        res.status(500).json({ success: false, eventType, error: "Failed to create user" });
        return;
      }
    }

    case "user.deleted": {
      try {
        await prismaClient.user.delete({
          where: {
            clerkId: evt.data.id!,
          }
        });
        res.status(200).json({ success: true, eventType });
        return;
      } catch (err) {
        res.status(500).json({ success: false, eventType, error: "Failed to delete user" });
        return;
      }
    }

    default:
      res.status(200).json({ success: true, message: "Webhook received but not processed", eventType });
      return;
  }
}
