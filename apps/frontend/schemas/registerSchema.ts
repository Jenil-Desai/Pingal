import { z } from "zod";

export const registerSchema = z.object({
  confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(1, { message: "Name is required" })
})

export type RegisterSchema = z.infer<typeof registerSchema>;
