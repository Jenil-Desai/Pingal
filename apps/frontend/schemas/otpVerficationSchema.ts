import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 characters"),
})

export type OtpSchema = z.infer<typeof otpSchema>;
