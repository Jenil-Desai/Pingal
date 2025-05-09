import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({message: "Email is required"}),
  password: z.string().min(8,{message: "Password must be at least 8 characters long"})
})

export type LoginSchema = z.infer<typeof loginSchema>;
