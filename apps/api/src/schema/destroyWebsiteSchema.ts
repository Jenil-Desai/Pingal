import { z } from "zod";

export const destroyWebsiteQuerySchema = z.object({
  websiteId: z
    .string({
      required_error: "Website ID is required",
      invalid_type_error: "Website ID must be a string",
    })
    .uuid({
      message: "Website ID must be a valid UUID format",
    }),
});

export type DestroyWebsiteQuery = z.infer<typeof destroyWebsiteQuerySchema>;
