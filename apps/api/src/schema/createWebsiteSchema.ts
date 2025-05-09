import { z } from "zod";

export const createWebsiteSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  url: z
    .string()
    .min(1, { message: "URL is required" })
    .url({ message: "Please enter a valid URL" }),
});
