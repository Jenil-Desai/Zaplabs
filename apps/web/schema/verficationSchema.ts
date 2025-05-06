import * as z from "zod";

export const verificationSchema = z.object({
  code: z.string().min(6, "Code must be at least 6 characters long"),
});

export type VerificationSchema = z.infer<typeof verificationSchema>;
