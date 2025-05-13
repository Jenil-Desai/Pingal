import { z } from "zod";

export const addWebsiteSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  url: z.string().url({ message: "Invalid URL" }).min(1, { message: "URL is required" }),
});

export type AddWebsiteType = z.infer<typeof addWebsiteSchema>;
